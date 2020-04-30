import { Component, OnInit, Directive, HostListener, ChangeDetectorRef } from '@angular/core';
import { HandRangePiece } from '../hand-range-piece';
import { HandRangeGroups } from '../hand-range-groups';
import { Rank } from '../app-enums.model';
import { DEFAULT_HAND_RANGE } from '../default-hand-range';

@Component({
  selector: 'app-hand-range-toolset',
  templateUrl: './hand-range-toolset.component.html',
  styleUrls: ['./hand-range-toolset.component.css']
})
export class HandRangeToolsetComponent implements OnInit {
  handRange = DEFAULT_HAND_RANGE;
  handRangeText = '';
  rangePercentage = 0;
  mouseDown = false;
  startMouseDrag: HandRangePiece;
  inRangeStartState: boolean;
  handRangeGroups = this.seperateHandRangeToGroups(this.handRange);

  constructor() {}

  ngOnInit() {}

  displayRank(n: number): string {
    const displayRanks = {
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: 'T',
      11: 'J',
      12: 'Q',
      13: 'K',
      14: 'A'
    }

    return displayRanks[n];
  }

  calcRangePercentage(handRange: HandRangePiece[]): number {
    let output: number = 0;
    for (const piece of handRange) {
      if (piece.isInRange) {
        output += piece.rangeWeight;
      }
    }

    output /= 1326;
    output *= 100;

    return output;
  }

  resetHandRange(): void {
    for (const piece of this.handRange) {
      piece.isInRange = false;
    }
    this.handRangeText = '';
    this.rangePercentage = this.calcRangePercentage(this.handRange);
  }

  seperateHandRangeToGroups(handRange: HandRangePiece[]): HandRangeGroups {
    let outputHandRangeGroups = {
      pairs: [],
      suitedConnectors: []
    };

    for (const handRangePiece of handRange) {
      if (handRangePiece.isInRange) {
        if (handRangePiece.isPair) {
          outputHandRangeGroups.pairs.push(handRangePiece);
        }
        if (handRangePiece.isSuited && (handRangePiece.rankOne - handRangePiece.rankTwo == 1)) {
          outputHandRangeGroups.suitedConnectors.push(handRangePiece);
        }
      }
      

    }
    return outputHandRangeGroups;
  } 

  convertPairsToText(handRangeGroups: HandRangeGroups): string {
    let output: string = '';
    
    let pairSegmentList = [];
    let previousPair: HandRangePiece;
    let pairSegmentStart: HandRangePiece;
    let pairSegmentEnd: HandRangePiece;

    for (const pair of handRangeGroups.pairs) {
      // set start of segment if not already set
      if (!pairSegmentStart) {
        pairSegmentStart = pair;
      }
      

      if (previousPair && previousPair.rankOne - pair.rankOne > 1) {
        pairSegmentEnd = previousPair;
        let pairSegment = [pairSegmentStart, pairSegmentEnd];
        pairSegmentList.push(pairSegment);

        pairSegmentStart = pair;
      }

      // roll previous pair forward
      previousPair = pair;
    }

    if (pairSegmentStart) {
      let pairSegment = [pairSegmentStart, previousPair];
      pairSegmentList.push(pairSegment);
    }

    for (const pairSegment of pairSegmentList) {
      if (output) {
        output += ', ';
      }

      if (pairSegment[0].rankOne == Rank.Ace) {
        output += this.displayRank(pairSegment[1].rankOne);
        output += this.displayRank(pairSegment[1].rankTwo);
        if (pairSegment[1].rankOne != Rank.Ace) {
          output += '+'; 
        }
      } else if (pairSegment[0].rankOne != pairSegment[1].rankOne) {
        output += this.displayRank(pairSegment[0].rankOne);
        output += this.displayRank(pairSegment[0].rankTwo);
        output += '-';
        output += this.displayRank(pairSegment[1].rankOne);
        output += this.displayRank(pairSegment[1].rankTwo);
      } else {
        output += this.displayRank(pairSegment[0].rankOne);
        output += this.displayRank(pairSegment[0].rankTwo);
      }
    }

    return output;
  }

  convertSuitedConnectorsToText(handRangeGroups: HandRangeGroups): string {
    let output: string = '';

    let segmentList = [];
    let previousPiece: HandRangePiece;
    let segmentStart: HandRangePiece;
    let segmentEnd: HandRangePiece;

    for (const piece of handRangeGroups.suitedConnectors) {
      // set start of segment if not already set
      if (!segmentStart) {
        segmentStart = piece;
      }
      

      if (previousPiece && previousPiece.rankOne - piece.rankOne > 1) {
        segmentEnd = previousPiece;
        let segment = [segmentStart, segmentEnd];
        segmentList.push(segment);

        segmentStart = piece;
      }

      // roll previous piece forward
      previousPiece = piece;
    }

    if (segmentStart) {
      let segment = [segmentStart, previousPiece];
      segmentList.push(segment);
    }

    for (const segment of segmentList) {
      if (output) {
        output += ', ';
      }

      if (segment[0].rankOne == Rank.Ace) {
        output += this.displayRank(segment[1].rankOne);
        output += this.displayRank(segment[1].rankTwo);
        output += 's';
        if (segment[1].rankOne != Rank.Ace) {
          output += '+'; 
        }
      } else if (segment[0].rankOne != segment[1].rankOne) {
        output += this.displayRank(segment[0].rankOne);
        output += this.displayRank(segment[0].rankTwo);
        output += 's';
        output += '-';
        output += this.displayRank(segment[1].rankOne);
        output += this.displayRank(segment[1].rankTwo);
        output += 's';
      } else {
        output += this.displayRank(segment[0].rankOne);
        output += this.displayRank(segment[0].rankTwo);
        output += 's';
      }
    }

    return output;
  }


  @HostListener('mousedown')
  public onMouseDown(): void {
    this.mouseDown = true;
  }

  @HostListener('mouseup')
  public onMouseUp(): void {
    this.mouseDown = false;
  }

  enableInRange(handRangePiece: HandRangePiece) {
    this.inRangeStartState = handRangePiece.isInRange;
    handRangePiece.isInRange = true;
    this.startMouseDrag = handRangePiece;
    this.rangePercentage = this.calcRangePercentage(this.handRange);
    this.handRangeGroups = this.seperateHandRangeToGroups(this.handRange);
    this.handRangeText = this.convertPairsToText(this.handRangeGroups);
    this.handRangeText += this.convertSuitedConnectorsToText(this.handRangeGroups);
  }

  dragEnableInRange(handRangePiece: HandRangePiece) {
    if (this.mouseDown) {
      handRangePiece.isInRange = true;
      this.rangePercentage = this.calcRangePercentage(this.handRange);
      this.handRangeGroups = this.seperateHandRangeToGroups(this.handRange);
      this.handRangeText = this.convertPairsToText(this.handRangeGroups);
      this.handRangeText += this.convertSuitedConnectorsToText(this.handRangeGroups);
    }
  }

  toggleInRange(handRangePiece: HandRangePiece) {
    if (this.startMouseDrag == handRangePiece) {
      handRangePiece.isInRange = !this.inRangeStartState;
    }
    this.startMouseDrag = null;
    this.rangePercentage = this.calcRangePercentage(this.handRange);
    this.handRangeGroups = this.seperateHandRangeToGroups(this.handRange);
    this.handRangeText = this.convertPairsToText(this.handRangeGroups);
    this.handRangeText += this.convertSuitedConnectorsToText(this.handRangeGroups);
  }

}

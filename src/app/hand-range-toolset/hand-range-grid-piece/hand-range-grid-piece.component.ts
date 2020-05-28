import { Component, OnInit, Input } from '@angular/core';
import { HandRangePiece } from 'src/app/hand-range-piece';


@Component({
  selector: 'ht-hand-range-grid-piece',
  templateUrl: './hand-range-grid-piece.component.html',
  styleUrls: ['./hand-range-grid-piece.component.css']
})
export class HandRangeGridPieceComponent implements OnInit {
  @Input() handRangePiece: HandRangePiece;
  
  constructor() { }

  ngOnInit() {
  }
  
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
}

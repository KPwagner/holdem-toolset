import { HandRangePiece } from './hand-range-piece';
import { Rank } from './ht-enums.model';

export const DEFAULT_HAND_RANGE: HandRangePiece[] = getDefaultRange();

function getDefaultRange(): HandRangePiece[] {
  // Returns a complete hand range with all piece not in range (isInRange = false)

  let output: HandRangePiece[] = [];

  for (let i = Rank.Ace; i > (Rank.Two -1); i--) {
    for (let j = Rank.Ace; j > (Rank.Two - 1); j--) {
      let rankOne: number;
      let rankTwo: number;
      let isSuited: boolean;
      let isPair: boolean;
      let isInRange = false;
      let rangeWeight: number;

      // places higher rank first
      if (i > j) {
        [rankOne, rankTwo, isSuited, isPair, rangeWeight] = [i, j, true, false, 4];
      } else if (i == j) {
        [rankOne, rankTwo, isSuited, isPair, rangeWeight] = [i, j, false, true, 6]
      } else {
        [rankOne, rankTwo, isSuited, isPair, rangeWeight] = [j, i, false, false, 12];
      }

      let currentHandRangePiece: HandRangePiece = {
        rankOne: rankOne,
        rankTwo: rankTwo,
        isSuited: isSuited,
        isPair: isPair,
        isInRange: isInRange,
        rangeWeight: rangeWeight
      };

      output.push(currentHandRangePiece);
    }
  }

  return output;
}

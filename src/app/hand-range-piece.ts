import { Rank } from "./ht-enums.model";

export interface HandRangePiece {
  rankOne: number;
  rankTwo: number;
  isSuited: boolean;
  isPair: boolean;
  isInRange: boolean;
  rangeWeight: number;
}
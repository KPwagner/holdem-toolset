import { Rank } from "./app-enums.model";

export interface HandRangePiece {
  rankOne: number;
  rankTwo: number;
  isSuited: boolean;
  isPair: boolean;
  isInRange: boolean;
  rangeWeight: number;
}
import { HandRangePiece } from "./hand-range-piece";

export interface HandRangeGroups {
  pairs?: HandRangePiece[];
  suitedConnectors?: HandRangePiece[];
  suitedOneGappers?: HandRangePiece[];
  suitedDoubleGappers?: HandRangePiece[];
  connectors?: HandRangePiece[];
  oneGappers?: HandRangePiece[];
  doubleGappers?: HandRangePiece[];
}
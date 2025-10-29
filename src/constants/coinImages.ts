import Bitcoin from "../assets/bitcoin_outline.svg?react";
import Usd from "../assets/dollar_outline.svg?react";
import Euro from "../assets/euro_outline.svg?react";
import Azn from "../assets/azn_outline.svg?react";

export const coinImages: Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  bitcoin: Bitcoin,
  usd: Usd,
  eur: Euro,
  azn: Azn,
};

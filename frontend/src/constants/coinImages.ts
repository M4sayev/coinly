import Bitcoin from "../assets/currency/bitcoin.svg?react";
import Usd from "../assets/currency/dollar.svg?react";
import Euro from "../assets/currency/euro.svg?react";
import Azn from "../assets/currency/azn.svg?react";

export const coinImages: Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  bitcoin: Bitcoin,
  usd: Usd,
  eur: Euro,
  azn: Azn,
};

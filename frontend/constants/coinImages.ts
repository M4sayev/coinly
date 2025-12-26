import Bitcoin from "@/assets/currency/bitcoin.svg";
import Usd from "@/assets/currency/dollar.svg";
import Euro from "@/assets/currency/euro.svg";
import Azn from "@/assets/currency/azn.svg";

export const coinImages: Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  bitcoin: Bitcoin,
  usd: Usd,
  eur: Euro,
  azn: Azn,
};

import Bitcoin from "../assets/bitcoin_outline.svg";
import Azn from "../assets/azn_outline.svg";
import Dollar from "../assets/dollar_outline.svg";
import Euro from "../assets/euro_outline.svg";

export const IMAGE_MAP: { [key: string]: string } = {
  bitcoin: Bitcoin,
  azn: Azn,
  usd: Dollar,
  eur: Euro,
};

export const PARTICLE_SPEED = 0.005;
export const IMG_SCALE = 0.8;
export const LEFT_OFFSET_COEFFICIENT = 0.05;
export const IMAGE_DENSITY = 6; // lower the value, more particles
export const JITTER = 70;
export const JITTER_THRESHOLD = 0.5;

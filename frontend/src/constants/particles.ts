import Bitcoin from "../assets/currency/bitcoin.svg";
import Azn from "../assets/currency/azn.svg";
import Dollar from "../assets/currency/dollar.svg";
import Euro from "../assets/currency/euro.svg";

export const IMAGE_MAP: { [key: string]: string } = {
  BTC: Bitcoin,
  AZN: Azn,
  USD: Dollar,
  EUR: Euro,
};

export const PARTICLE_SPEED = 0.005;
export const IMG_SCALE = 0.8;
export const LEFT_OFFSET_COEFFICIENT = 0.01;
export const IMAGE_DENSITY = 6; // lower the value, more particles
export const JITTER = 70;
export const JITTER_THRESHOLD = 0.5;

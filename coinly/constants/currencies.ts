export const currencies = [
  { id: "bitcoin", displayName: "BTC" },
  { id: "usd", displayName: "USD" },
  { id: "eur", displayName: "EUR" },
  { id: "azn", displayName: "AZN" },
];

export function currencyToSign(currency: string) {
  switch (currency.toLowerCase()) {
    case "btc":
      return "BTC";
    case "usd":
      return "$";
    case "eur":
      return "€";
    default:
      return currency.toUpperCase();
  }
}

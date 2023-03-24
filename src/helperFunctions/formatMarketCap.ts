export function formatMarketCap(market: string) {
  let cap = market;
  let length = cap.length;

  while (length > 3) {
    cap = cap.slice(0, length - 3) + "," + cap.slice(length - 3);
    length = length - 3;
  }

  return cap;
}

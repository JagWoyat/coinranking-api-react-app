export function isPriceIncreasing(price: number | string) {
  let bool = false;
  if (price >= 0 || price === "Increasing") bool = true;
  return bool;
}

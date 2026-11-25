import type { Dish, SiteContent } from "../types/index.type";

export function formatPrice(
  price: number | undefined,
  menu: Pick<SiteContent["menu"], "showPrices" | "currency">,
) {
  if (!menu.showPrices || price === undefined) return null;
  return `${menu.currency} ${price.toFixed(2)}`;
}

export function featuredDishes(dishes: Dish[]) {
  return dishes.slice(0, 5);
}

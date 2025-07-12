import { expect, it } from "vitest";
import { getStars } from "../utils/generateRating";
import { getDiscountedPrice } from "../utils/getDiscountPrice";

it("should getting rate of users", () => {
  const rating = getStars(4.5);
  expect(rating).toMatchSnapshot();
});

it("should be give a discounted price", () => {
  const discountPrice = getDiscountedPrice(500, 10);
  expect(discountPrice).toBe(450);
});

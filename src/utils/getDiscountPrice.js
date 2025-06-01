export const getDiscountedPrice = (price, discount) => {
  if (!discount || discount <= 0) return price;
  const discountedPrice = price - (price * discount) / 100;
  return parseFloat(discountedPrice.toFixed(2));
};

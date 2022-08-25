export const TotalPriceHandler = (cart, label) => {
  const totalPrice = cart
    .map((product) =>
      product.prices.reduce(
        (acc, curr) =>
          curr.currency.label === label
            ? curr.amount.toFixed(2) * product.quantity
            : acc,
        0
      )
    )
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);
  return totalPrice;
};

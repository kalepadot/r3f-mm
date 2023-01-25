//I need to re-route this to the hooks folder

function computeTotalValue(data, discountCode, lowestPrice) {
  let totalVal = 0;
  for (let i = 0; i < data.length; i++) {
    totalVal += data[i].price * data[i].quantity;
  }
  if (discountCode === 'FIFTY') {
    return totalVal * 0.5;
  }
  if (discountCode === 'FREE') {
    return totalVal - lowestPrice;
  }
  return totalVal;
}
function cartItemPriceDiscount(price, discountCode) {
  if (discountCode === 'FIFTY') {
    return price * 0.5;
  } else {
    return price;
  }
}
function computeLowestPrice(data) {
  if (!data) {
    return 0;
  }
  let lowestPrice = 0;
  data.forEach((item, index) => {
    if (index === 0) {
      lowestPrice = item.price;
    }
    if (item.price < lowestPrice) {
      lowestPrice = item.price;
    }
  });
  return lowestPrice;
}

export { computeLowestPrice, cartItemPriceDiscount, computeTotalValue };

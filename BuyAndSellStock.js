let maxProfit = function(prices) {
  if (prices.length < 1) return 0;
  let min = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else if (prices[i] - min > maxProfit) maxProfit = prices[i] - min;
  }
  return maxProfit;
};

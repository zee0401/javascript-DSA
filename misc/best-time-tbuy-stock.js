// Brute Force Solution
function maxProfit1(prices) {
  let globalProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];

      if (currentProfit > globalProfit) globalProfit = currentProfit;
    }
  }

  return globalProfit;
}

// console.log(maxProfit1([7, 6, 4, 3, 1]));

// Greedy Algorithm
const maxProfit = function (prices) {
  let minStockPurchasePrice = prices[0] || 0;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStockPurchasePrice) {
      minStockPurchasePrice = prices[i];
    }

    profit = Math.max(profit, prices[i] - minStockPurchasePrice);
  }

  return profit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));

// [7, 1, 5, 3, 6, 4]
// min = 7 => 1
// profit = 0 => 5-1 = 4 => 6-1 = 5

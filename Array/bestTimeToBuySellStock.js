//121-Best time to buy sell stock
function maxProfitFun(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  let i;
  for (i = 1; i < prices.length; i++) {
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }
  return maxProfit;
}
let prices = [7, 1, 4, 5, 3];
const profit = maxProfitFun(prices);
console.log(profit);

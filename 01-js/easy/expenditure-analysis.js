/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  pricesByCategoryList = []
  pricesByCategory = {}
  transactions.forEach(transaction => {
    if (pricesByCategory[transaction.category]) {
      pricesByCategory[transaction.category] += transaction.price
    } else {
      pricesByCategory[transaction.category] = transaction.price
    }
  });
  Object.keys(pricesByCategory).forEach(category => {
    pricesByCategoryList.push({category: category, totalSpent: pricesByCategory[category]})
  });
  return pricesByCategoryList;
}

module.exports = calculateTotalSpentByCategory;

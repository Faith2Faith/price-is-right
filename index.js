function calculateItemsTotal(items) {
  const total = items.price * items.quantity * (items.discount - 1)

  items.total = Number(total * 100) / 100

  return items
}

function calculateTotal(items) {
  return items.map(calculateItemsTotal)
}
module.exports = calculateTotal

// not sure on how to remove the extra decimal place
// not sure why its negative

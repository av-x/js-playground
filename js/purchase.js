const tax = 0.13;
const phonePrice = 79.99;
const accessoryPrice = 8.99;

var bankBalance = 605.92;
var amount = 0;

function calcTax(amount) {
  return amount * tax;
}

function format(amount) {
  return "$" + amount.toFixed(2);
}

while (amount < bankBalance) {
  amount = amount + phonePrice;

  if (amount < bankBalance) {
    amount = amount + accessoryPrice;
  }
}

amount = amount + calcTax(amount);

console.log("Your purchase: " + format(amount));

if (amount > bankBalance) {
  console.log("You can't afford this purchase. (" + format(amount) + ")");
}

//   QUESTION 1. Show me how to calculate the average price of all items. Please console.log the average.

//   Find item prices
var priceArray = [];

var push = items.forEach(function(p) {
  priceArray.push(p.price);
});
// console.log(priceArray);

//   Price items added together
var total = 0;
var add = priceArray.forEach(function(p) {
  total += Number(p);
});

//   Find amount of price items
var itemLength = items.length;

//   Divide total by amount & console log
var avg = total / itemLength;
console.log("Question 1:")
console.log("The Average Price is " + (avg).toFixed(2));


//   QUESTION 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
console.log("Question 2:");

var itemArray = [];

items.forEach(function(p) {
  if(p.price >= 14.00 && p.price <= 18.00) {
    itemArray.push(p.title);
  };
});

console.log(itemArray);

//   QUESTION 3. Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

// Find amount of "GBP" currency codes
var currArray = [];

var push = items.forEach(function(c) {
  currArray.push(c.currency_code);
});
// console.log(currArray);

// Focus on "GBP" code and console log
console.log("Question 3:");

items.forEach(function(c) {
  if(c.currency_code === "GBP") {
    console.log(c.title + " \u00A3" + c.price);
  };
});

//   QUESTION 4. Show me how to find which items are made of wood. Please console.log the ones you find.
console.log("Question 4:");

items.forEach(function(a) {
  a.materials.forEach(function(b) {
    if(b === "wood") {
      console.log(a.title);
    }
});
});

//   QUESTION 5.  Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
console.log("Question 5:");

items.filter(function(x) {
  if(x.materials.length > 8) {
    console.log(x.title + x.materials);
  };
});


// QUESTION 6. Show me how to calculate how many items were made by their sellers.

var eighteen = items.filter(function(r) {
  return(r.who_made === "i_did");
});

console.log("Question 6:");
console.log(eighteen.length + " were made by their sellers");

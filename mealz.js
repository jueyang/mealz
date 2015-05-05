//  + Create diner objects which represent a single diner.
//  + Add dishes to a diner's meal
//  + Total up the cost of all of the diner's meals
//  + Add a fixed tax percentage to the total bill
//  + Add a percentage tip to the total bill
//  + Split the bill fairly among the diners
//    + Each diner should pay the tax on their own food
//    + Each diner should pay an equal share of the tip
//  + Print out a total bill
//  + Print a breakdown for what each diner owes

var config = require('./config.json');

var menu = config.menu,
	taxRate = config.taxRate;

function sum(){
	var sum = 0;

	for (var i = 0; i < arguments.length; i++){
		sum += arguments[i];
	}

	return sum
}
// a typical diner
var Diner = function(name, dishes){

	var consumed = dishes.map(function(d){return d.price;}),
		individualSum = sum(consumed),
		tax = individualSum * taxRate;

	this.dinerName = name;
	this.total = individualSum + tax;
};

// var meal = new Meal([caroline,george])
var Meal = function(diners, tipPercent){

	var dinerTotals = diners.map(function(d){return d.total;}),
		mealTotal = sum(dinerTotals),
		tipSum = mealTotal * tipPercent,
		tipSplit = this.tipSum / diners.length;

	// print
	console.log('the meal is $' + mealTotal)

	for (i = 0; i < diners.length; i++){
		console.log(diners[i].dinerName + ' owes $' + diners[i].total + ' plus $' + tipSplit + ' tip')
	}
};
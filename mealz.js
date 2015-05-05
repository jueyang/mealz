/*
 * Objective of this app:
  * Create diner objects which represent a single diner.
  * Add dishes to a diner's meal
  * Total up the cost of all of the diner's meals
  * Add a fixed tax percentage to the total bill
  * Add a percentage tip to the total bill
  * Split the bill fairly among the diners
  	* Each diner should pay the tax on their own food
  	* Each diner should pay an equal share of the tip
  * Print out a total bill
  * Print a breakdown for what each diner owes
*/

var _ = require('lodash');
var mealz = {};

config = require('./config.json');

mealz.menu = config.menu,
mealz.taxRate = config.taxRate;

// a typical diner
mealz.Diner = function(name, dishes){

	var consumed = [];

	_.each(dishes,function(d){
		var matching = _.find(mealz.menu,{'item':d});
		consumed.push(_.result(matching,'price'));
	});

	var individualSum = _.sum(consumed),
		tax = individualSum * mealz.taxRate;

	this.dinerName = name;
	this.total = individualSum + tax;

	console.log(individualSum, tax);
};

// var meal = new Meal([caroline,george])
mealz.Meal = function(diners, tipPercent){

	var dinerTotals = diners.map(function(d){return d.total;}),
		mealTotal = _.sum(dinerTotals),
		tipSum = mealTotal * tipPercent,
		tipSplit = tipSum / diners.length;

	// print
	console.log('the meal is $' + mealTotal);

	for (i = 0; i < diners.length; i++){
		console.log(diners[i].dinerName + ' owes $' + diners[i].total + ' plus $' + tipSplit + ' tip')
	}
};	

module.exports = mealz;
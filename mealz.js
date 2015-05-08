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
var Diner = require('./models/Diner.js');
var Meal = require('./models/Meal.js');

var mealz = {
  Diner: Diner,
  Meal: Meal,
}

module.exports = mealz;
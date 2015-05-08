var mealz = require('./mealz.js');

var caroline = new mealz.Diner('Caroline',['wine','arugula salad','seared salmon']);
var george = new mealz.Diner('George',['old fashion','lamb shoulder','coffee']);

new mealz.Meal([caroline,george],0.2);
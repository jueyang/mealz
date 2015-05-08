var _ = require('lodash');

function Meal(diners, tipPercent){

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

module.exports = Meal;
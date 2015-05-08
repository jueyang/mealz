var _ = require('lodash');

function Diner(name, dishes, menu, taxRate){

	var consumed = [];

	_.each(dishes,function(d){
		var matching = _.find(menu,{'item':d});
		consumed.push(_.result(matching,'price'));
	});

	var individualSum = _.sum(consumed),
		tax = individualSum * taxRate;

	this.dinerName = name;
	this.total = individualSum + tax;

	return this
};

module.exports = Diner;
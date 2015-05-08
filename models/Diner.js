var _ = require('lodash');
var config = require('../config.json');

function Diner(name, dishes){

	var consumed = [];

	_.each(dishes,function(d){
		var matching = _.find(config.menu,{'item':d});
		consumed.push(_.result(matching,'price'));
	});

	var individualSum = _.sum(consumed),
		tax = individualSum * config.taxRate;

	this.dinerName = name;
	this.total = individualSum + tax;

	return this
};

module.exports = Diner;
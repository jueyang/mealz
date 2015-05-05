//  + Create diner objects which represent a single diner.
//  + Add dishes to a diner's meal
//  + Total up the cost of all of the diner's meals
//  + Add a fixed tax percentage to the total bill
//  + Add a percentage tip to the total bill
//  + Split the bill fairly among the diners
//    + Each diner should pay the tax on their own food
//    + Each diner should pay an equal share of the tip
//  Print out a total bill
//  Print a breakdown for what each diner owes

var mealz = {};

// the menu of a mean bistro
mealz.menu = [
	{id:001,item:'wine',price:11},
	{id:002,item:'old fashion',price:12},
	{id:003,item:'arugula salad',price:8},
	{id:004,item:'onion soup',price:7},
	{id:005,item:'seared salmon',price:21},
	{id:006,item:'lamb shoulder',price:25},
	{id:007,item:'lava cake',price:9},
	{id:008,item:'coffee',price:3.5}
];

// NYC sales tax and normal tip breaks
mealz.taxRate = 0.08875;
mealz.tipOfChoice = 0; // TODO: get from input

// a typical diner
// if there is a splitted dish
// the argument split number will be created
var Diner = function(dishes, splitNumber){
	this.dishes = dishes;
	this.getConsumed = function(){
		// looks like this
		// consumed: [
		// 	{item: 'wine',price:11},
		// 	{item: 'arugula salad',price:8},
		// 	{item: 'seared salmon', price: 21}
		// ]
		return consumed
	};

	// calculate total cost before split
	this.calcTotalCost = function(){
		var cost = 0;
		this.getConsumed().forEach(item){
			cost += item.price;
		}

		if (splitNumber === undefined || splitNumber === 0){
			return cost
		} else {
			return cost/splitNumber;
		}
	};

	// splitted taken into consideration
	this.calcTax = this.calcTotalCost() * mealz.taxRate;
};

// Caroline orders some stuff
// So does George
var caroline = new Diner(['wine','arugula salad','seared salmon']);
var george = new Diner(['old fashion','lamb shoulder','coffee']);

// they share dessert
// the dessert 
var splitted = new Diner(['lava cake'],2);

var mealCost = caroline.calcTotalCost() + george.calcTotalCost(),
	totalTip = mealCost * tipOfChoice;

var splitTip = totalTip/2;

function printReceipt(){
	// return each diner's calcTax
	// mealCost
	// and splitTIp
}

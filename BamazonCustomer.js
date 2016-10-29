
var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "Bamazon"
})

connection.connect(function(error){
	if (error) throw error;
	//console.log("connected as id " + connection.threadId);
})

var showProducts = connection.query('SELECT * FROM products', function(error, result) {
        if (error) throw error;
    	console.log('Available products:');
    	for(var i = 0; i < result.length; i++) {
      console.log('Item ID: ' + result[i].ItemID + '   Product Name: ' + result[i].ProductName + '   Price: $' + result[i].Price);
    };
  
    startPrompt();


function startPrompt() {
	inquirer.prompt({
		name: 'item',
		type: 'input',
		message: 'Please enter the ID of the item you would like to purchase'
	}).then(function (answer){
		if (!parseInt(answer.item)){
			console.log("Invalid ID number");
			return startPrompt();
		};
		var idSelected = parseInt(answer.item) - 1;
		inquirer.prompt({
			name: 'quantity',
			type: 'input',
			message: 'You have selected' + result[idSelected].ProductName + '. Please enter a quantity.'
		}).then(function(answerQuantity){
			var quantity = parseInt(answerQuantity.quantity);
			var inventory = parseInt(result[idSelected].StockQuantity);
			if (answerQuantity.quantity == 0) {
				console.log("Please add at least 1 item to your cart")
				return startPrompt();
			};
			if (quantity > inventory) {
				console.log("Sorry! We do not have enough of that item in stock to place your order. Please try again");
				return startPrompt();
			};
			var total = parseFloat(result[idSelected].Price) * quantity;
			console.log(result[idSelected].ProductName + ' | Price: $' + result[idSelected].Price + '| Quantity: ' + quantity + ' | Total: $' + total);
			connection.query('UPDATE products SET StockQuantity=' + (inventory - quantity) + ' WHERE ?', {ItemId: answer.item}, function(error, result){
				console.log("Your order has been succesfully submitted. Thank you!");
			})
		})
	})
}
});

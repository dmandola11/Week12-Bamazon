
var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "Bamazon"
});

connection.connect(function(error){
	if (error) throw error;
	console.log("connected as id " + connection.threadId);
});

var startOrder = function() {
    connection.query('SELECT * FROM Products', function(error, result) {
        console.log(result);
        inquirer.prompt({
            name: "choice",
            type: "rawlist",
            choices: function(value) {
                var productArray = [];
                for (var i = 0; i < result.length; i++) {
                    productArray.push(result[i].itemname);
                }
                return productArray;
            },
            message: "What auction would you like to place a bid in?"
        }).then(function(answer) {
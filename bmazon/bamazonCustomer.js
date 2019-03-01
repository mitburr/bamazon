var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

var inquirer = require("inquirer");

let itemsDisplay = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (i in res){
            console.log(
                "item id: " + res[i].id + "\n"
                + "item name:  " + res[i].name+ "\n"
                + "item price: " + res[i].price+ "\n"
            )
        }
    });
}

function updateProduct(quantity, id) {
    console.log("Updating bids\n");
    var query = connection.query(
        "UPDATE products SET ? WHERE ?;",
        [
            {
                stock: quantity,
            },
            {
                id: id,
            }
        ],
        function (err, res) {
        }
    );
    connection.end();
}

let order = function(){
    inquirer.prompt([
        {
            type: "input",
            message: "Which item would you like to buy?",
            name: "id"
        },{
            type: "input",
            message: "How much of that item would you like to buy?",
            name: "quantity"
        }])
        .then(function (inquirerResponse) {
            // let id  = correctedID;
            // let quantity = inquirerResponse.quantity;
            connection.query("SELECT * FROM products", function (err, res,) {
                if (err) throw err;
                let correctedID = inquirerResponse.id;
                correctedID --;
                if(inquirerResponse.quantity > res[correctedID].stock){
                    console.log("your order is greater than Bamazon's stock. Please select a quantity less than "+res[correctedID].stock+".");
                order();    
                }
                else{
                    console.log("item purchased, your total today comes to " + 
                        (inquirerResponse.quantity * res[correctedID].price) +
                        " dollars.");
                        let updatedTotal = res[correctedID].stock - inquirerResponse.quantity
                        updateProduct(updatedTotal, inquirerResponse.id);
                }
            }
        );
    })};
itemsDisplay();
order();


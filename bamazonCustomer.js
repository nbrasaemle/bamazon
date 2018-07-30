var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "Localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
    // console.log("connected as id " + connection.threadId);
    // connection.end();

});

function start() {

    let query = "SELECT item_id, product_name, department_name, price FROM products"
    connection.query(query, function (err, res) {
        console.log("-------------------ignore this line----------------")
        console.table(res);
        console.log("-------------------type an item number----------------------");
    });//end query
    selectItem();
}

function selectItem() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "choice",
                message: "What is the item number for the item you would like to purchase?"

            },
            {
                type: "input",
                name: "quantity",
                message: "What is the quantity would you like to purchase?",
                //     validate: function (value) {
                //         if (parseInt(value) < 0) {
                //             console.log("\nPlease enter a positive number!");
                //             return false
                //         }

                //     }
            }
        ])
        .then(function (ans) {
            let select = "SELECT item_id, product_name, price, stock_quantity FROM products WHERE item_id=?"
            // connection.query(select,function(err,res){
            //     if (parseInt(ans.choice) !== res.item_id){
            //         console.log("Item Query NOT Found, Try Again.");
            //         start();
            //     }
            // });
            
            connection.query(select, [ans.choice], function (err, res) {
                // console.log("hi");
                let stock = res[0].stock_quantity;
                if (stock >= ans.quantity) {
                    let buy = "UPDATE products SET ? WHERE ?";
                    connection.query(select, [
                        {
                            stock_quanitiy: (stock - parseInt(ans.quantity))
                        },
                        {
                            item_id: ans.choice
                        }
                    ], function (err, resp) {
                        let totalPrice = ans.quantity * res[0].price;
                        console.log("Congrats! You bought " + ans.quantity + " of " + res[0].product_name + " for " + totalPrice + "!!!");
                        // connection.query(select, [ans.choice], function(err,resp){
                        //     console.log("Remaining stock: " + res[0].stock_quantity);
                        // });
                    });
                }
                else {
                    console.log("Sorry, the quantity that you have requested is not available due to insuffiecient stock quantity. \nPlease Try again!");
                    start();
                }
            });
        })

} //end select function



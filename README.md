# Week12-Bamazon

## Screen Shots

### 1. Bamazon Database
Here is my Bamazon Database created in mySQL workbench. I created the code in a SQL file, pasted it into mySQL workbench and then created all of the products by reusing the code for inserting data into the table.
![Bamazon Database](https://github.com/dmandola11/Week12-Bamazon/blob/master/Media/BamazonDatabase.png)

### 2. Running the App in Terminal
When the app is run the user will see a list of all items from the database and a prompt to select the product that the user would like to purchase by typing in it's Id.
![Initialize App](https://github.com/dmandola11/Week12-Bamazon/blob/master/Media/List%20of%20Items%20and%20First%20Prompt.png)

### 3. Item Name Displayed, Enter Quantity
Once the Id has been entered a prompt will display the name of item and the user will input the quantity of the item they would like to purchase. Here the user asked for Id 6 and Iphone 8 is the item selected.
![Item found, enter Quantity](https://github.com/dmandola11/Week12-Bamazon/blob/master/Media/Item%20Selected.png)

### 4. Insufficient Quantity, Try Again
If the quantity requested is higher than amount in stock (StockQuantity from products table in Bamazon Database) then the user will be notified of the insufficient supply and the user will start over. In the screenshot below the user wants to purchase 11 units. However, there are only 10 units in the database and the app notifies the customer and the app starts over.
![Quantity](https://github.com/dmandola11/Week12-Bamazon/blob/master/Media/Insufficient%20Quantity%20in%20Stock.png)

### 5. New Quantity, Submit Order
Now the user still wants an iPhone 8 so they try for a lower quantity of 9. The app then displays the name, unit price, quantity and the total for the order. The user is then notified that the order has been submitted. Success!
![Submit Order](https://github.com/dmandola11/Week12-Bamazon/blob/master/Media/Order%20Submitted.png)

### 6. Database Updated
The databse is now updated to reflect the change from the order that the user has placed. The iPhone 8 StockQuantity has changed from 10 to 1.
![Database Updated](https://github.com/dmandola11/Week12-Bamazon/blob/master/Media/Database%20Updated.png)

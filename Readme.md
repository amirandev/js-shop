# Shop Class

A JavaScript class that represents a shop with product management and shopping cart functionality.

## Usage

1. Create a new instance of the `Shop` class:

   ```javascript
   const myShop = new Shop();
   ```

2. Add products to the shop:

   ```javascript
   myShop.addProduct("P001", "Shirt", 20);
   myShop.addProduct("P002", "Jeans", 40);
   myShop.addProduct("P003", "Shoes", 50);
   ```

3. Print all products in the shop:

   ```javascript
   myShop.printProducts();
   ```

4. Edit a product in the shop:

   ```javascript
   myShop.editProduct("P002", "Trousers", 35);
   ```

5. Add products to the shopping cart:

   ```javascript
   myShop.addToCart("P001");
   myShop.addToCart("P003");
   ```

6. Retrieve the items in the shopping cart:

   ```javascript
   const cartItems = myShop.getCartItems();
   console.log("Cart items:", cartItems);
   ```

7. Calculate the total price of the items in the shopping cart:

   ```javascript
   const totalToPay = myShop.calculateTotal();
   console.log("Total to pay:", totalToPay);
   ```

## API

### `addProduct(productCode, name, price)`

Adds a new product to the shop.

- `productCode` (string): The code of the product.
- `name` (string): The name of the product.
- `price` (number): The price of the product.

### `editProduct(productCode, newName, newPrice)`

Edits an existing product in the shop.

- `productCode` (string): The code of the product to edit.
- `newName` (string): The new name for the product.
- `newPrice` (number): The new price for the product.

### `printProducts()`

Prints all the products in the shop.

### `addToCart(productCode)`

Adds a product to the shopping cart.

- `productCode` (string): The code of the product to add to the cart.

### `calculateTotal()`

Calculates the total price of all products in the shopping cart.

Returns the total price as a number.

### `getCartItems()`

Retrieves the items in the shopping cart.

Returns an array of cart items.


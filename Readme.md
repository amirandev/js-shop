// Create a new instance of the Shop class
const myShop = new Shop();

// Add products to the shop
myShop.addProduct("P001", "Shirt", 20);
myShop.addProduct("P002", "Jeans", 40);
myShop.addProduct("P003", "Shoes", 50);

// Print all products in the shop
myShop.printProducts();
/*
Output:
Products:
Code: P001, Name: Shirt, Price: 20
Code: P002, Name: Jeans, Price: 40
Code: P003, Name: Shoes, Price: 50
*/

// Edit a product in the shop
myShop.editProduct("P002", "Trousers", 35);
/*
Output:
Edited product: Trousers
*/

// Add products to the shopping cart
myShop.addToCart("P001");
/*
Output:
Added product with code 'P001' to cart.
*/

myShop.addToCart("P003");
/*
Output:
Added product with code 'P003' to cart.
*/

// Retrieve the items in the shopping cart
const cartItems = myShop.getCartItems();
console.log("Cart items:", cartItems);
/*
Output:
Cart items: [
  { productCode: 'P001', name: 'Shirt', price: 20 },
  { productCode: 'P003', name: 'Shoes', price: 50 }
]
*/

// Calculate the total price of the items in the shopping cart
const totalToPay = myShop.calculateTotal();
console.log("Total to pay:", totalToPay);
/*
Output:
Total to pay: 70
*/

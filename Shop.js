/**
 * Represents a shop that manages products and a shopping cart.
 */
class Shop {
  /**
   * Constructs a new instance of the Shop class.
   */
  constructor() {
    this.products = [];
    this.cart = [];
  }

  /**
   * Prints all the products in the shop.
   */
  printProducts() {
    console.log("Products:");
    this.products.forEach((product) => {
      console.log(`Code: ${product.productCode}, Name: ${product.name}, Price: ${product.price}`);
    });
  }

  /**
   * Adds a new product to the shop.
   * @param {string} productCode - The code of the product.
   * @param {string} name - The name of the product.
   * @param {number} price - The price of the product.
   */
  addProduct(productCode, name, price) {
    const newProduct = {
      productCode: productCode,
      name: name,
      price: price,
    };
    this.products.push(newProduct);
    console.log(`Added product: ${name}`);
  }

  /**
   * Edits an existing product in the shop.
   * @param {string} productCode - The code of the product to edit.
   * @param {string} newName - The new name for the product.
   * @param {number} newPrice - The new price for the product.
   */
  editProduct(productCode, newName, newPrice) {
    const productIndex = this.products.findIndex((product) => product.productCode === productCode);
    if (productIndex !== -1) {
      const product = this.products[productIndex];
      product.name = newName;
      product.price = newPrice;
      console.log(`Edited product: ${newName}`);
    } else {
      console.log(`Product with code '${productCode}' not found.`);
    }
  }

  /**
   * Adds a product to the shopping cart.
   * @param {string} productCode - The code of the product to add to the cart.
   */
  addToCart(productCode) {
    const product = this.products.find((product) => product.productCode === productCode);
    if (product) {
      this.cart.push(product);
      console.log(`Added product with code '${productCode}' to cart.`);
    } else {
      console.log(`Product with code '${productCode}' not found.`);
    }
  }

  /**
   * Calculates the total price of all products in the shopping cart.
   * @returns {number} - The total price to pay.
   */
  calculateTotal() {
    let total = 0;
    this.cart.forEach((product) => {
      total += product.price;
    });
    return total;
  }

  /**
   * Retrieves the items in the shopping cart.
   * @returns {Array} - The array of cart items.
   */
  getCartItems() {
    return this.cart;
  }
}

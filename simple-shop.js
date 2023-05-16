class Shop {
  constructor() {
    this.products = [];
    this.cart = [];
  }

  addProduct(name, price) {
    const product = { name, price };
    this.products.push(product);
  }

  addToCart(productIndex) {
    const product = this.products[productIndex];
    if (product) {
      this.cart.push(product);
      console.log('პროდუქტი დაემატა საყიდლების კალათაში.');
    } else {
      console.log('პროდუქტის კოდი არასწორია!');
    }
  }

  removeFromCart(productCode) {
    let removedProduct = null;
    this.cart.forEach((product, index) => {
      if (product.code === productCode) {
        removedProduct = this.cart.splice(index, 1)[0];
        console.log(`პროდუქტი ამოღებულია საყიდლების სიიდან: ${removedProduct.name}`);
      }
    });
    if (!removedProduct) {
      console.log(`პროდუქტი კოდით ${productCode}, არ აღმოჩნდა კალათაში.`);
    }
  }

  getCartItems() {
    return this.cart;
  }

  calculateTotal() {
    let total = 0;
    for (const product of this.cart) {
      total += product.price;
    }
    return total;
  }

  checkEnoughMoney(totalAmount) {
    const total = this.calculateTotal();
    if (total > totalAmount) {
      console.log('მენეჯერს დაუძახე რა სია გამისუფთაოს. მენეჯერი სად არის?');
    } else {
      console.log('გადახდა წარმატებით განხორციელდა.');
      console.log('პარკში ჩამიდეთ თუ შეიძლება');
      console.log('10 თეთრი');
    }
  }
}

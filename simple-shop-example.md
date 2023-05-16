### გამოყენების ნიმუში

პირველ რიგში შემოვიტანოთ simple-shop.js
```html
<script src="./simple-shop.js"></script>
```
```javascript
// შექმენით Shop კლასის ახალი ობიექტი
const shop = new Shop();

// დავამატოთ პროდუქტები მაღაზიაში (ჩვათვალოთ რომ მენეჯერი ვართ)
shop.addProduct('პეპსი 250მლ', 0.99);
shop.addProduct('შოკოლადის ფილა "ალპენ გოლდი" რძიანი შოკოლადი 85გრ', 2.49);
shop.addProduct('ვაფლი დიაბეტური "ხბფ" კაკაოთი 130გრ', 1.99);
shop.addProduct('წყალი მინერალური "საირმე" 2ლ', 1.69);

/* 
  პროდუქტების კალათაში დამატება კოდის მიხედვით 
  პროდუქტის კოდი შეესაბამება პროდუქტის ინდექსს
*/
shop.addToCart(0);
shop.addToCart(2);

// ვაფლის ყიდვის გადაფიქრება/სიიდან ამოღება ყიდვამდე
shop.removeFromCart(2);

// კალათაში დამატებული პროდუქტების სია
const cartItems = shop.getCartItems();
console.log("პროდუქტები კალათაში:", cartItems);

// სულ რამდენია გადასახდელი?
const total = shop.calculateTotal();
console.log("მთლიანი გადასახდელი:", total);

// სულ რამდენი გვაქვს ბარათზე
shop.checkEnoughMoney(5.20); // 5 ლარი და 20 თეთრი მაგალითად

```

### კლასის გადმოწერა:
https://github.com/amirandev/js-shop/blob/main/simple-shop.js

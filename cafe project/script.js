let butt = document.getElementById("butt");
if (butt) {
  butt.onclick = function () {
    window.location.href = "main.html";
  };
}

let icon = document.getElementById("icon");
if (icon) {
  icon.onclick = function () {
    window.location.href = "cart.html";
  };
}

let cart = document.getElementById("icon-name");
if (cart) {
  cart.onclick = function () {
    window.location.href = "cart.html";
  };
}


let burgerCount = parseInt(localStorage.getItem("burger")) || 0;
let friesCount  = parseInt(localStorage.getItem("fries"))  || 0;
let pizzaCount  = parseInt(localStorage.getItem("pizza"))  || 0;
let ramenCount  = parseInt(localStorage.getItem("ramen"))  || 0;
let coffeeCount = parseInt(localStorage.getItem("coffee")) || 0;
let cakeCount   = parseInt(localStorage.getItem("cake"))   || 0;



let burgerplus = document.getElementById("burger-plus");
if (burgerplus) {
  burgerplus.onclick = function () {
    burgerCount++;
    alert(`You have ${burgerCount} Burger in your cart !`);
    localStorage.setItem("burger", burgerCount);
  };
}

let friesplus = document.getElementById("fries-plus");
if (friesplus) {
  friesplus.onclick = function () {
    friesCount++;
    alert(`You have ${friesCount} Fries in your cart !`);
    localStorage.setItem("fries", friesCount);
  };
}

let pizzaplus = document.getElementById("pizza-plus");
if (pizzaplus) {
  pizzaplus.onclick = function () {
    pizzaCount++;
    alert(`You have ${pizzaCount} Pizza in your cart !`);
    localStorage.setItem("pizza", pizzaCount);
  };
}

let ramenplus = document.getElementById("ramen-plus");
if (ramenplus) {
  ramenplus.onclick = function () {
    ramenCount++;
    alert(`You have ${ramenCount} Ramen in your cart !`);
    localStorage.setItem("ramen", ramenCount);
  };
}

let coffeeplus = document.getElementById("coffee-plus");
if (coffeeplus) {
  coffeeplus.onclick = function () {
    coffeeCount++;
    alert(`You have ${coffeeCount} Cold Coffee in your cart !`);
    localStorage.setItem("coffee", coffeeCount);
  };
}

let cakeplus = document.getElementById("cake-plus");
if (cakeplus) {
  cakeplus.onclick = function () {
    cakeCount++;
    alert(`You have ${cakeCount} Cake in your cart !`);
    localStorage.setItem("cake", cakeCount);
  };
}


let burgerminus = document.getElementById("burger-minus");
if (burgerminus) {
  burgerminus.onclick = function () {
    if (burgerCount > 0) burgerCount--;
    if(burgerCount == 0){
        alert(`No Burger in cart :(`);
    }
    localStorage.setItem("burger", burgerCount);
  };
}

let friesminus = document.getElementById("fries-minus");
if (friesminus) {
  friesminus.onclick = function () {
    if (friesCount > 0) friesCount--;
    if(friesCount == 0){
        alert(`No Fries in cart :(`);
    }
    localStorage.setItem("fries", friesCount);
  };
}

let pizzaminus = document.getElementById("pizza-minus");
if (pizzaminus) {
  pizzaminus.onclick = function () {
    if (pizzaCount > 0) pizzaCount--;
    if(pizzaCount == 0){
        alert(`No Pizza in cart :(`);
    }
    localStorage.setItem("pizza", pizzaCount);
  };
}

let ramenminus = document.getElementById("ramen-minus");
if (ramenminus) {
  ramenminus.onclick = function () {
    if (ramenCount > 0) ramenCount--;
    if(ramenCount == 0){
        alert(`No Ramen in cart :(`);
    }
    localStorage.setItem("ramen", ramenCount);
  };
}

let coffeeminus = document.getElementById("coffee-minus");
if (coffeeminus) {
  coffeeminus.onclick = function () {
    if (coffeeCount > 0) coffeeCount--;
    if(coffeeCount == 0){
        alert(`No Coffee in cart :(`);
    }
    localStorage.setItem("coffee", coffeeCount);
  };
}

let cakeminus = document.getElementById("cake-minus");
if (cakeminus) {
  cakeminus.onclick = function () {
    if (cakeCount > 0) cakeCount--;
    if(cakeCount == 0){
        alert(`No Cake in cart :(`);
    }
    localStorage.setItem("cake", cakeCount);
  };
}

let burgerItem = document.getElementById("burgerItem");
let friesItem  = document.getElementById("friesItem");
let pizzaItem  = document.getElementById("pizzaItem");
let ramenItem  = document.getElementById("ramenItem");
let coffeeItem = document.getElementById("coffeeItem");
let cakeItem   = document.getElementById("cakeItem");
let totalItem  = document.getElementById("totalItem");

if (burgerItem) burgerItem.textContent = "Burger : " + burgerCount;
if (friesItem)  friesItem.textContent  = "Fries : " + friesCount;
if (pizzaItem)  pizzaItem.textContent  = "Pizza : " + pizzaCount;
if (ramenItem)  ramenItem.textContent  = "Ramen : " + ramenCount;
if (coffeeItem) coffeeItem.textContent = "Coffee : " + coffeeCount;
if (cakeItem)   cakeItem.textContent   = "Cake : " + cakeCount;

if (totalItem) {
  let total = burgerCount * 70 + friesCount * 90 + pizzaCount * 210 +ramenCount * 250 + coffeeCount * 70 + cakeCount * 350;

  totalItem.textContent = "Total Price : " + total + " /-";
}


let clear = document.getElementById("clear");

if (clear) {
  clear.onclick = function () {
    burgerCount = 0;
    burgerItem.textContent = "Burger : " + burgerCount;

    friesCount = 0;
    friesItem.textContent = "Fries : " + friesCount;

    pizzaCount = 0;
    pizzaItem.textContent = "Pizza : " + pizzaCount;

    ramenCount = 0;
    ramenItem.textContent = "Ramen : " + ramenCount;

    coffeeCount = 0;
    coffeeItem.textContent = "Coffee : " + coffeeCount;

    cakeCount = 0;
    cakeItem.textContent = "Cake : " + cakeCount;

    localStorage.clear();

    if (totalItem) {
      totalItem.textContent = "Total Price : 0" + " /-";
    }
  };
}

let returnBtn = document.getElementById("return");

if(returnBtn){
  returnBtn.onclick = function(){
    window.location.href = "main.html";
  }
}
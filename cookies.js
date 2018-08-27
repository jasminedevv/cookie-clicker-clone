// counter and main button variables
let cookieCount = 0;
let clickPower = 1;

let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

cookieCounter.innerHTML = cookieCount;
console.log(cookieCount);

let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

let refreshCookieCount = function() {
  cookieCounter.innerHTML = cookieCount;
}

// shop variables
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

let refreshPowerClick = function() {
  clickPowerLevel.innerHTML = clickPowerLevel;
  clickPowerPrice.innerHTML = clickPowerPriceAmount;
  clickPowerMultiple.innerHTML = clickPower;
}

//event listeners
// increase cookie count by clickPower when button pressed
cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  refreshCookieCount();
})

buyClickPower.addEventListener("click", function() {
  if (cookieCount >= clickPowerPriceAmount) {
    console.log("item successfully bought");
    cookieCount -= clickPowerPriceAmount;
    clickPowerLevelNumber += 1;
    clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.3);
    refreshPowerClick();
    else {
      console.log("you don't have enough cookies!");
    }
  }
})

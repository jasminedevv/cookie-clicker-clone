// counter and main button variables
let cookieCount = 500;
let clickPower = 1;

let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

console.log("initial cookie count is " + cookieCount);

let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

let refreshCookieCount = function() {
  cookieCounter.innerHTML = cookieCount;
  console.log("cookie count is now " + cookieCount);
}

// shop variables
let buyClickPowerElement = document.getElementById('buy-click-power');
let clickPowerPriceElement = document.getElementById('click-power-price');
let clickPowerLevelElement = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

let refreshPowerClick = function() {
  clickPowerLevelElement.innerHTML = clickPowerLevelNumber //???;
  clickPowerPriceElement.innerHTML = clickPowerPriceAmount;
  clickPowerMultiple.innerHTML = clickPower;
  console.log("power level set to " + clickPower)
}

//set default values
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

//event listeners
// increase cookie count by clickPower when button pressed
cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPowerLevelNumber;
  refreshCookieCount();
  // console.log("cookie count is now " + cookieCount);
});

buyClickPowerElement.addEventListener("click", function() {
  console.log("well at least the event listener works");
  if (cookieCount >= clickPowerPriceAmount) {
    console.log("item successfully bought");
    cookieCount -= clickPowerPriceAmount;
    clickPowerLevelNumber += 1;
    clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.3);
    refreshPowerClick();
    refreshCookieCount();
  } else {
      console.log("you don't have enough cookies!");
    }
  });

  buyGrandma.addEventListener("click", function() {

})

  refreshCookieCount();

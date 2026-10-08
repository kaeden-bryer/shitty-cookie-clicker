const addButton = document.querySelector('#add_cookie');
const cookieButton = document.querySelector('#cookie_button');
const content = document.querySelector('#content');
const cookiesText = document.querySelector('#cookie_count');
const cookieMultiplierText = document.querySelector('#cookie_multiplier');
const priceText = document.querySelector('#price');
const buyButton = document.querySelector('#buy');
const bakersDiv = document.querySelector('#bakers');
const bakerButton = document.querySelector('#buy_baker');
const bakerText = document.querySelector('#baker_price')

const bakerString = `<img class="bakerLady" src="baker.jpeg" width="50"></img>`;
const frame = document.querySelector('#frame');

const cookieTimer = setInterval(autoCookies, 100);

let cookies = 0;
let cps = 0;
let cookieMultiplier = 1;
let price = 50;
let bakerPrice = 100;


addButton.addEventListener("click", addCookies);
buyButton.addEventListener("click", buyThing);
cookieButton.addEventListener("click", addCookies);
bakerButton.addEventListener("click", addBaker);

function addCookies(){
    cookies += Math.floor(cookieMultiplier);
    cookiesText.innerText = `Cookies: ${cookies}`;
}

function buyThing(){
    if (cookies < price) {
        content.innerHTML = "You do not have enough cookiy";
    } else {
        content.innerHTML = "Mm yes you buy";
        cookies -= price;
        cookiesText.innerText = `Cookies: ${cookies}`;
        cookieMultiplier *= 5;
        cookieMultiplierText.innerText = `Multiplier: ${cookieMultiplier}`;
        price = Math.floor(price*1.5);
        priceText.innerHTML = `Price to buy next upgrade: ${price}`;
    }
}

function addBaker(){
    if (cookies < bakerPrice){
        content.innerHTML = "You need more cookiy for baker"
    } else {
        content.innerHTML = "You got Baker!!";
        cookies -= bakerPrice;
        cookiesText.innerText = `Cookies: ${cookies}`;
        frame.insertAdjacentHTML('beforeend', bakerString);
        cps += 50;

        bakerPrice = Math.floor(price*4);
        bakerText.innerHTML = `Baker Price: ${bakerPrice}`;
    }
} 

function autoCookies(){
    cookies += Math.floor(cps / 10);
    cookiesText.innerText = `Cookies: ${cookies}`;
}
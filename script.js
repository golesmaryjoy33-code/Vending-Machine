let balance = 0;

const screen = document.getElementById("screen");
const tray = document.getElementById("tray");

function updateScreen(message) {
    screen.innerHTML =`
    ${message}<br.
    Balance: $${balance}
    `;
}

function insertCoin(amount) {
    balance += amount;
    updateScreen("Coin Inserted");
}

function buyProduct(product, price){
    if(balance >= price){
        balance -= price;

        tray.innerText = ` ${product} dispense`;

        updateScreen(`Enjoy your ${product}!`);

    }
    else{
        updateScreen(`Not Enough Money for ${product}`);
    }
}

function returnCoins(){
    tray.innerText = `Returned $${balance}`;
    balance = 0;
    updateScreen("Coins Returned");
}

updateScreen("Insert Coin");
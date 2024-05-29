var money = 0; // global player's money

// HTML MAIN ELEMENTS (except shop buttons)
var element = {
    clicker: document.getElementById("main-clicker"), // button
    money: document.getElementById("banana-count"), // money count text
}

// ============= GLOBAL FUNCTIONS =============

function addMoney() { // onClicker pressed add ClickGain
    money += 1; // Increase money by 1 on each click
    updateMoney();
}

function updateMoney() { // update html money txt
    element.money.innerHTML = money;
}

// =============== SHOP BUTTON CLASS =============

// Placeholder for ShopElement class and other related functions
// ...

// ================= START =================

// FIRST UPDATE (on page loaded)
updateMoney(); // money txt

// set main clicker function onClick
element.clicker.onclick = function() {
    addMoney();
};
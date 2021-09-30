var inputPast = document.querySelector("#inputPast");
var inputStock = document.querySelector("#inputStock");
var inputCurrent = document.querySelector("#inputCurrent");
var inputError = document.querySelector("#inputError");
var finalOutput = document.querySelector("#finalOutput");
var inputBtn = document.querySelector("#inputBtn");
var clrBtn = document.querySelector("#clrBtn");


inputBtn.addEventListener("click", clickHandler);
clrBtn.addEventListener("click", clear);


function clickHandler() {
    var inputPrice = Number(inputPast.value);
    var stocksQuantity = Number(inputStock.value);
    var currentPrice = Number(inputCurrent.value);
    check(inputPrice, stocksQuantity, currentPrice)

}

function check(pastPrice, stocks, currPrice) {


    /* if( (inputPrice || stocksQuantity || currentPrice === 0 || "" ) || ( inputPrice || stocksQuantity || currentPrice < 0) ){ */
    if (pastPrice <= 0 || stocks <= 0 || currPrice <= 0) {
        errormsg("Please put Valid input (ie. All fields shall be more than zero)")
    } else {
        calculator(pastPrice, stocks, currPrice);

    }

}

function calculator(inputPrice, stocksQuantity, currentPrice) {

var inputValue = inputPrice*stocksQuantity;
var currentValue = currentPrice*stocksQuantity;

    if (inputValue < currentValue) {
        var profit = (currentValue - inputValue);
        var profitPercentage = (profit / inputValue) * 100
        var proPer = profitPercentage.toFixed(2)
        showmsg(`You have made profit of Rs. ${profit} and  percentage ${proPer} % .`)
    } else {
        if (inputValue > currentValue) {
            var loss = (inputValue - currentValue);
            var lossPercentage = (loss / inputValue) * 100
            var lossPer = lossPercentage.toFixed(2)
            showmsg(`You have made Rs. ${loss} and  percentage ${lossPer} % .`)

        } else {
            if (inputValue = currentValue);
            showmsg(`Have faith, Destiny is all.`)

        }
    }
}


function clear() {
    inputPast.value = "";
    inputStock.value = "";
    inputCurrent.value = "";
    clrErrorMsg();
    hidemsg();
}

function showmsg(msg) {
    finalOutput.style.display = "block";
    finalOutput.style.color ="green"
    finalOutput.innerText = msg;
    

}

function errormsg(msg) {
    inputError.style.display = "block";
    inputError.style.color ="Red"
    inputError.innerText = msg;
}

function clrErrorMsg() {
    inputError.style.display = "none";
}

function hidemsg() {
    finalOutput.style.display = "none";
}
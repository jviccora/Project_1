// variable declaration
// var userInput = document.querySelector("#stock-input").value;
var stockBtn = document.querySelector("#stock-search");
var apiKey = "j1OSOs2MNhy0kx3NISNHhhm2GrKrKhuSu5nVtG8PlwImQf4BThjeyMVeWPqJ";

// AJAX and queryURL from api documentation at https://www.worldtradingdata.com/documentation?javascript#stock-and-index-real-time

 function stockSearch() {
    
const url = new URL(
    "https://api.worldtradingdata.com/api/v1/stock"
);
var userInput = document.querySelector("#stock-input").value;
let params = {
     "symbol": userInput,
    //"symbol": "SNAP",
    "api_token": apiKey,
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

fetch(url)
    .then(response => response.json())
    .then(json => {
        // var tr = document.createElement("tr");
        // var newTR = document.querySelector("tbody").tr;
        // var td = document.createElement("td");
        var stockSymbol = json.data[0].symbol;
        document.querySelector("#td1").innerHTML = stockSymbol;
        var stockName = json.data[0].name;
        document.querySelector("#td2").innerHTML = stockName;
        var stockPrice = json.data[0].price;
        document.querySelector("#td3").innerHTML = stockPrice;
        var stockDayChange = json.data[0].day_change;
        document.querySelector("#td4").innerHTML = stockDayChange;
        var stockYesterdayClosing = json.data[0].close_yesterday;
        document.querySelector("#td5").innerHTML = stockYesterdayClosing;
        console.log(json);
        
    });
};
stockBtn.addEventListener("click", stockSearch);

// display appropriate data in table

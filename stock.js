var stockBtn = document.querySelector("#stock-search");
var apiKey = "j1OSOs2MNhy0kx3NISNHhhm2GrKrKhuSu5nVtG8PlwImQf4BThjeyMVeWPqJ";

// AJAX and queryURL from api documentation at https://www.worldtradingdata.com/documentation?javascript#stock-and-index-real-time  
function stockSearch() {
    event.preventDefault();
    const url = new URL(
        "https://api.worldtradingdata.com/api/v1/stock"
    );
    var userInput = document.querySelector("#stock-input").value;
    let params = {
        "symbol": userInput,
        "api_token": apiKey,
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));
    fetch(url)
        .then(response => response.json())
        .then(json => { 
            var stockTable = document.querySelector("#stock-table");
            var newRow = stockTable.insertRow(-1);
            var newStockSymbolCell = newRow.insertCell(0);
            var newStockNameCell = newRow.insertCell(1);
            var newStockPriceCell = newRow.insertCell(2);
            var newStockDayChangeCell = newRow.insertCell(3);
            var newStockYesterdayClosingCell = newRow.insertCell(4);
      
            var stockSymbol = json.data[0].symbol;
            var symbol = document.createTextNode(stockSymbol);
            newStockSymbolCell.appendChild(symbol);
            var stockName = json.data[0].name;
            var name = document.createTextNode(stockName);
            newStockNameCell.appendChild(name);
            var stockPrice = json.data[0].price;
            var stockPriceText = document.createTextNode(stockPrice);
            newStockPriceCell.appendChild(stockPriceText);
            var stockDayChange = json.data[0].day_change;
            var stockDayChangeText = document.createTextNode(stockDayChange);
            newStockDayChangeCell.appendChild(stockDayChangeText);
            var stockYesterdayClosing = json.data[0].close_yesterday;
            var stockClosingText = document.createTextNode(stockYesterdayClosing);
            newStockYesterdayClosingCell.appendChild(stockClosingText);
            console.log(json);     
        });
};
stockBtn.addEventListener("click", stockSearch);
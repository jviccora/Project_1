var getCoinBtn = $("#coinSearch").click(function (event) {
	console.log(event);
});


var currencyName = document.getElementById("currencyNameCol");

var coinPrice = document.getElementById("coinPriceCol");

var lastPrice = document.getElementById("lastPriceCol");

var dailyChange = document.getElementById("dailyChangeCol");

//Coin array made for the url to cycle through the different coins
var coinArr = ["btc", "eth", "dai", "bch", "tusd"]
for (let index = 0; index < coinArr.length; index++) {
	var settings = {
		"crossDomain": true,
		"url": "https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=" + coinArr[index],
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
			"x-rapidapi-key": "21191d6105msh33bc7e64aa0f8d2p1ce9eajsn04ebeb9562c7"
		}
	}

	$.ajax(settings).then(function (response) {
		console.log(response);
	//Variables that I need from the API
	// debugger
		var coinNameApi = response.coin_name;
		var coinPriceApi = response.coin_price;
		var coinLastPriceApi = response.last_price;
		var dailyPercentApi = response.price_24hr_pcnt;

		if(coinNameApi === "Bitcoin"){
			currencyName.append(coinNameApi);
			coinPrice.append(coinPriceApi);
			lastPrice.append(coinLastPriceApi);
			dailyChange.append(dailyPercentApi);
		} 
		// else if (coinId === "ETH"){
		// 	getTd2.append(coinName, coinPrice, coinLastPrice, coinChangePercent);
		// }
		// else if (coinId === "DAI"){
		// 	getTd3.append(coinName, coinPrice, coinLastPrice, coinChangePercent);
		// }
		// else if (coinId === "BCH"){
		// 	getTd4.append(coinName, coinPrice, coinLastPrice, coinChangePercent);
		// }
		// else if (coinId === "TUSD"){
		// 	getTd5.append(coinName, coinPrice, coinLastPrice, coinChangePercent);
		// }
		// find out how to get the name of the coin
		// find a way to dynamically set the name to a var
		// append the response to each td tag
		//
$("#otherCoins").on("change", function(event){
	event.preventDefault();
console.log("test");
});
	})
	}





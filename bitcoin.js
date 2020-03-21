var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=btc",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
		"x-rapidapi-key": "21191d6105msh33bc7e64aa0f8d2p1ce9eajsn04ebeb9562c7"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
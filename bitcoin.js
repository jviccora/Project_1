var apiKey = "21191d6105msh33bc7e64aa0f8d2p1ce9eajsn04ebeb9562c7";
var apiUrl = "https://bravenewcoin-v1.p.rapidapi.com/prices?coin=btc&appid=21191d6105msh33bc7e64aa0f8d2p1ce9eajsn04ebeb9562c7";

$.ajax({
    url: apiUrl,
    type: "GET"
}).then(function (response) {
    console.log(response);
});

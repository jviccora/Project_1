
// AJAX and queryURL pulled from World Trading Data documentation
var url = new URL(
    "https://api.worldtradingdata.com/api/v1/stock"
);

let params = {
    "symbol": "SNAP",
    "api_token": "j1OSOs2MNhy0kx3NISNHhhm2GrKrKhuSu5nVtG8PlwImQf4BThjeyMVeWPqJ",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

fetch(url, {
    method: "GET",
})
    .then(response => response.json())
    .then(json => console.log(json));

// pull appopriate data

// display appropriate data in table

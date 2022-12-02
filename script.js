const urlApi = {
	"async": true,
	"crossDomain": true,
	"url": "https://quotes15.p.rapidapi.com/quotes/random/",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "4aa0eb5f6cmshbe14b648260d98dp1d00fejsnf69b780da815",
		"X-RapidAPI-Host": "quotes15.p.rapidapi.com"
	}
};

$.ajax(urlApi).then(
	function (response) {
		console.log(response);
});

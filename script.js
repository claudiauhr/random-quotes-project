//My API:
/* const URL_API = {
	"async": true,
	"crossDomain": true,
	"url": "https://quotes15.p.rapidapi.com/quotes/random/",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "4aa0eb5f6cmshbe14b648260d98dp1d00fejsnf69b780da815",
		"X-RapidAPI-Host": "quotes15.p.rapidapi.com"
	}
};

$.ajax(URL_API).then(
	function (data) {
		console.log(data);
});
 */

//IPO - INPUT -> PROCESS -> OUTPUT

//CONSTANTS AND VARIABLES
let $randomQuote = undefined; 

const URL_API = {
	"async": false,
	"crossDomain": true,
	"url": "https://quotes15.p.rapidapi.com/quotes/random/",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "4aa0eb5f6cmshbe14b648260d98dp1d00fejsnf69b780da815",
		"X-RapidAPI-Host": "quotes15.p.rapidapi.com"
	}
};

// $.ajax(URL_API).then(
// 	function (data) {
// 		$randomQuote = data.content
// });

// console.log($randomQuote);

//CACHE DOM ELEMENTS REFERENCE

//REGISTER EVENT LISTENERS

//FUNCTIONS
function getData() {
	$.ajax(URL_API)
	.then(function (data) {
		console.log(data);
		return data					//i took .content from "return data"
	}, function(error) {
		return 
	});
}
// function renderData()


//PSEUDOCODE -> Steps that I need to be performed

/*
1) Get some data from some place -> Try and put that data in somewhere in the DOM.

2) Select a DOM element to insert some in my quote app into.

3) Make a ajax request to the api and get a random quote data.

4) Loop over the list of quotes objects and generate an html card for each object.

*/
// 2:20hr Week 3 Day 3

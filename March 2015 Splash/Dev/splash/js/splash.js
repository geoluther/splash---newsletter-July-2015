// splash.js
// js to generate gift icons in splash page


var cds = {
	"gift": [
		{ 
			"name": "Lucinda Williams",
			"id": "lucinda-1",
			"imgSrc":"http://www.kgnu.org/images/img-f14/gift-lucinda.png",
			"imgOver": "http://www.kgnu.org/images/img-f14/gift-lucinda-over.png",
			"link": "https://kgnu.org/ht/quickjoin.html"
		},

		{
			"name": "Lucinda Williams 2",
			"id": "lucinda-2",
			"imgSrc":"http://www.kgnu.org/images/img-f14/gift-lucinda.png",
			"imgOver": "http://www.kgnu.org/images/img-f14/gift-lucinda-over.png",
			"link": "https://kgnu.org/ht/quickjoin.html"
		},

		{
			"name": "Greensky",
			"id": "greensky-1",
			"imgSrc":"http://www.kgnu.org/images/img-f14/gift-greensky-oct24.png",
			"imgOver": "http://www.kgnu.org/images/img-f14/gift-greensky-oct24-hover.png",
			"link": "https://kgnu.org/ht/quickjoin.html"
		},


		{
			"name": "Greensky",
			"id": "greensky-2",
			"imgSrc":"http://www.kgnu.org/images/img-f14/gift-greensky-oct24.png",
			"imgOver": "http://www.kgnu.org/images/img-f14/gift-greensky-oct24-over.png",
			"link": "https://kgnu.org/ht/quickjoin.html"
		}
	]
};

var tix = {
	"gift": [
		{
			"name": "",
			"imgSrc":"",
			"imgOver": "",
			"link": ""
		},

		{
			"name": "",
			"imgSrc":"",
			"imgOver": "",
			"link": ""
		}
	]
};

var shirts = {
	"gift": [
		{
			"name": "",
			"imgSrc":"",
			"imgOver": "",
			"link": ""
		},

		{
			"name": "",
			"imgSrc":"",
			"imgOver": "",
			"link": ""
		}
	]
};


var other = {
	"gift": [
		{
			"name": "",
			"imgSrc":"",
			"imgOver": "",
			"link": ""
		},

		{
			"name": "",
			"imgSrc":"",
			"imgOver": "",
			"link": ""
		}
	]
};


function buildGifts(gifts, id) {

	console.log("you called buildGifts!");
	console.log("length " + gifts.gift.length);
	
	for (var i = 0; i < gifts.gift.length; i++) {
		var link = gifts.gift[i].link;
		var imgID = gifts.gift[i].id;
		var imgSrc = gifts.gift[i].imgSrc;
		var imgOver = gifts.gift[i].imgOver;
		console.log(imgOver);
		
		var img = '<img class="gift-img" src="' + imgSrc + '" id="'+ imgID +'" >';
		var html = '<li><a href="' + link + '">' + img + '</a></li>';
		
		$(id).append(html);

		// imgSel = '#' + imgID;
		// console.log(imgSel);


		// $(imgSel).hover(  function(giftCopy) {
		// 	$( this ).attr("src", giftCopy.gift[i].imgOver);
		// 	console.log("mouseover: " + giftCopy.gift[i].imgOver);
		// }, function() {
		// 	$( this ).attr("src", giftCopy.gift[i].imgSrc);
		// 	console.log("mouse out: " + giftCopy.gift[i].imgSrc);
		// });

	}
}


function swap() {

	$(".gift-img").hover( function() {
		var	url = $(this).attr("src");
		var alt = url.split('.')[0] + '-hover' + url.split('.')[1]; 
	
	$(this).attr("src", alt);
	
	}, function() {
		var url = $(this).attr("src").replace("-hover", '');
		$(this).attr("src", url);
	});
}


$(document).ready(function () {
	buildGifts(cds, "#cds");
	swap();

});

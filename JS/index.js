$(document).ready(function() {
	var batgirlLogo = $("#batgirlLogo");
	var batgirl = $("#batgirl");
	
	batgirlLogo.click(function() {
		batgirl.stop().animate({"left": "0", "opacity": "1", "z-index": "2"}, 500);
		$("#home").stop().animate({"opacity": "0"}, 500);
	});
	
	$("#batgirl #mainMobileLogo img, footer nav ul a:nth-child(1) li").click(function() {
   		$("#home").stop().animate({"opacity": "1"}, 500);
		batgirl.stop().animate({"opacity": "0", /*"left": "-1000px",*/ "z-index": "-1"}, 500);
		
   });
});
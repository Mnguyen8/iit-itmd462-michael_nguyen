var main = function(){

	$("div p:first-child").css("color","red");
	$("div p:nth-child(2)").css("color", "orange");	
	$("div p:nth-child(3)").css("color", "yellow");
	$("div p:nth-child(4)").css("color", "green");	
	$("div p:nth-child(5)").css("color", "blue");
	$("div p:nth-child(6)").css("color", "purple");
	$("div p:last-child").css("color", "pink");
}

$(document).ready(main);

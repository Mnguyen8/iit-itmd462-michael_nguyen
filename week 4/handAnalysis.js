//Micahel Nguyen 
//ITMD 462

//These cards cna be cahnged to any suit and rank
var c1 = {"suit":"spades", "rank":"ace"};
var c2 = {"suit":"heart", "rank":"ace"};
var c3 = {"suit":"spades", "rank":"3"};
var c4 = {"suit":"club", "rank":"king"};
var c5 = {"suit":"club", "rank":"5"};

//array of cards in hand
var hand = [c1,c2,c3,c4,c5];
//runs the function
handAnalysis(hand);
//function
function handAnalysis(hand){
	var pair = 0;
	//checks for rank pairs
	if(hand[0].rank == hand[1].rank){
		pair = pair +1;
	}
	if(hand[0].rank == hand[2].rank){
		pair = pair +1;
	}
	if(hand[0].rank == hand[3].rank){
		pair = pair +1;
	}
	if(hand[0].rank == hand[4].rank){
		pair = pair +1;
	}
	if(hand[1].rank == hand[2].rank){
		pair = pair +1;
	}
	if(hand[1].rank == hand[3].rank){
		pair = pair +1;
	}
	if(hand[1].rank == hand[4].rank){
		pair = pair +1;
	}
	if(hand[2].rank == hand[3].rank){
		pair = pair +1;
	}
	if(hand[2].rank == hand[4].rank){
		pair = pair +1;
	}
	if(hand[3].rank == hand[4].rank){
		pair = pair +1;
	}

	//checks flush
	if(hand[0].suit == hand[1].suit && hand[0].suit == hand[2].suit && hand[0].suit == hand[3].suit && hand[0].suit == hand[4].suit){
		console.log("Flush");
	}
	//checks to see if hand is a bust
	if(pair == 0 && hand[0].suit != hand[1].suit){
		console.log("Bust");
	}
	else if(pair == 0 && hand[0].suit != hand[2].suit){
		console.log("Bust");
	}
	else if(pair == 0 && hand[0].suit != hand[3].suit){
		console.log("Bust");
	}
	else if(pair == 0 && hand[0].suit != hand[4].suit){
		console.log("Bust");
	}

	if(pair == 1){
		console.log("A pair"); //hand has 1 pair
	}
	if(pair == 2 ){
		console.log("Two pair"); //hand has 2 pair
	}
	if(pair == 3){
		console.log("Three of a kind"); //hand has 3 of the same card and two other ones
	}
	if(pair == 4 ){
		console.log("A pair");
		console.log("Three of a kind");  //hand has 3 of the same and a pair making a full house
		console.log("Full House")
	}
	if (pair == 6) {
		console.log("Four of a kind"); //hand has 4 cards that are the same and 1 other
	}
}

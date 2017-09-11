var num = prompt("Please enter a number", "1");
var num1 = parseInt(num);
var checkThree;
var checkFive;
var checkBoth;
if (num1 >= 1) {
	checkThree = num1%3;
	checkFive = num1%5;

	if(checkThree == 0 && checkFive == 0){
		console.log("FizzBuzz");
	}
	else if(checkThree == 0){
		console.log("Fizz");
	}
	else if(checkFive == 0){
		console.log("Buzz");
	}
	else{
		console.log(num);
	}
}
else
{
	console.log("Error: invalid input")
}

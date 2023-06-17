/*•	Using any of the tools you’ve worked with so far, create a game of Tic-Tac-Toe.
•	Create a Tic-Tac-Toe game grid using your HTML element of choice. 
•	When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
•	A heading should say whether it is X’s or O’s turn and change with each move made.
•	A button should be available to clear the grid and restart the game.
•	When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.*/







let turn = 1;
let symbol = "fa-circle-o";
$("button").click(function() {  //this is an event listener function checking for a button click
	if($(this).hasClass("fa-circle-o")|| $(this).hasClass("fa-times")){ //if a cell has an O or if a cell has an x, no change because the cell is occupied.
		return

	}
	if($("#winner").is(":visible")){     //if the alert is visible, no change because the game is over.
		return
	}


	if(turn == 1) {				//text shows "X's TURN TO PLAY"
		$("#screen").text("X'S TURN TO PLAY");

	
		$(this).addClass("fa fa-circle-o");    //a class is being added to a cell to display "O" from font-awesome
		turn = 2;	
		symbol = "fa-circle-o";	
	}
	else {
		$("#screen").text("O'S TURN TO PLAY");  //text shows "O's TURN TO PLAY"
	
		
		$(this).addClass("fa fa-times");   //a class is being added to a cell to display "X" from font-awesome
		turn = 1;
		symbol = "fa-times";
	}
	if(checkForWinner(symbol)){   //this function checks who won the game. If symbol == O, then O is the winner and an alert writes text "PLAYER O WINS"
		if(symbol == "fa-circle-o"){
			$("#winner").text("PLAYER O WINS")
		}
		else if(symbol == "fa-times"){  //if symbol == X, then X is the winner and an alert writes text "PLAYER X WINS"
			$("#winner").text("PLAYER X WINS")
		}
		$("#winner").addClass("show");   //the alert adds a class show, to put the alert box on the screen
		
	}
	else if(checkForTie()){   		//otherwise there is a tie. The alert shows "TIE - TRY AGAIN" and the alert adds a class "show" to make the alert appear
		$("#winner").text("TIE - TRY AGAIN")
		$("#winner").addClass("show");

	}
	
});

function checkForTie(){  
	let finalResult = $(".fa-circle-o, .fa-times").length; //checks for a tie by taking the length of X's and O's

	if(finalResult == 9){      //if the length == 9, there is a tie. 
		return true;
	}else{
		return false
	}

}


// Function to check the winning move - function checkForWinner takes a parameter, symbol. 
function checkForWinner(symbol) {
	if ($(".sq1").hasClass(symbol) &&	//If sq 1 has class symbol and sq 2 and 3 has class symbol, then sq 1, 2 and 3 have the color green. 
		$(".sq2").hasClass(symbol) &&	//The same pattern for all other possible three of the same in a row. 
		$(".sq3").hasClass(symbol))
	{
		$(".sq1").css("color", "green");
		$(".sq2").css("color", "green");
		$(".sq3").css("color", "green");
		return true;
	} else if ($(".sq4").hasClass(symbol)
			&& $(".sq5").hasClass(symbol)
			&& $(".sq6").hasClass(symbol))
	{
		$(".sq4").css("color", "green");
		$(".sq5").css("color", "green");
		$(".sq6").css("color", "green");
		return true;
	} else if ($(".sq7").hasClass(symbol)
			&& $(".sq8").hasClass(symbol)
			&& $(".sq9").hasClass(symbol))
	{
		$(".sq7").css("color", "green");
		$(".sq8").css("color", "green");
		$(".sq9").css("color", "green");
		return true;
	} else if ($(".sq1").hasClass(symbol)
			&& $(".sq4").hasClass(symbol)
			&& $(".sq7").hasClass(symbol))
	{
		$(".sq1").css("color", "green");
		$(".sq4").css("color", "green");
		$(".sq7").css("color", "green");
		return true;
	} else if ($(".sq2").hasClass(symbol)
			&& $(".sq5").hasClass(symbol)
			&& $(".sq8").hasClass(symbol))
	{
		$(".sq2").css("color", "green");
		$(".sq5").css("color", "green");
		$(".sq8").css("color", "green");
		return true;
	} else if ($(".sq3").hasClass(symbol)
			&& $(".sq6").hasClass(symbol)
			&& $(".sq9").hasClass(symbol))
	{
		$(".sq3").css("color", "green");
		$(".sq6").css("color", "green");
		$(".sq9").css("color", "green");
		return true;
	} else if ($(".sq1").hasClass(symbol)
			&& $(".sq5").hasClass(symbol)
			&& $(".sq9").hasClass(symbol))
	{
		$(".sq1").css("color", "green");
		$(".sq5").css("color", "green");
		$(".sq9").css("color", "green");
		return true;
	} else if ($(".sq3").hasClass(symbol)
			&& $(".sq5").hasClass(symbol)
			&& $(".sq7").hasClass(symbol))
	{
		$(".sq3").css("color", "green");
		$(".sq5").css("color", "green");
		$(".sq7").css("color", "green");
		return true;
	} else {
		return false;
	}
}

//Resetting the game 
function reset()
{
$("#screen").text("NEW GAME - O'S TURN TO PLAY"); //printing text to the #screen header when reset is clicked
$(".r").removeClass("fa fa-circle-o fa fa-times"); // removes the O's and X's from the button after reset

turn=1;
$(".r").css("background-color", ""); //removes the background color from the button
$("#winner").removeClass("show"); // removes the show class from the alert

// Reset Colors
$(".r").css("color", "black"); //resets X's and O's colors
}



$(document).ready(function(){


	/*--- Generate Computer Number ---*/

	var answerNumber = function() {
			computerNumber = Math.floor(Math.random() * 101);
				console.log(computerNumber);
	};

	answerNumber();

	var guessCounter = function(){
		countNumber = $("#count").val();
		guessCount = +countNumber;
		};


	guessCounter();
	
	/*--- Manage User Input ---*/

		$("#guessButton").on("click", function(){
			var humanInput = $("#userGuess").val();
			$("#guessList").append("<li>" + humanInput + "</li>");
			$("#userGuess").val(" ");
		});
	
  	/*--- Start New Game ---*/
	
	$(".new").click(function() {
		$("#guessList").empty();
		answerNumber();
		$("#count").val("0");
	});

	/*--- Display information modal box ---*/

  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/

  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});



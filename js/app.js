
$(document).ready(function(){

	var humanInput = $("#userGuess").val();

	var counter = 0;

	var answerNumber = function() {
		computerNumber = Math.floor(Math.random() * 101);
			console.log(computerNumber);
	}

	answerNumber();

	/*--- Start New Game ---*/
	$(".new").click(function() {
		$("ul").empty();
		var counter = 0;
		answerNumber();
	})

	/*--- During a Game ---*/



	$("#count").replaceWith(counter++);
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});



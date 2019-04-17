$(document).ready(function(){
   
    // hide retry button when document loads
    $("#retry").hide();
    
    // generate random number
    var randomNum = Math.floor((Math.random() * 50 ) + 1);
    
    // log random number 
    console.log(randomNum);
    
    // array to store user answers
    var answers = [];
    
    // set guess value to 0 on start
    var guess = 0;
    
    // target guess input id
    var input = document.querySelector("#guessInput");
    
    // target output id
    var output = document.querySelector("#output");
    
    // set counter to 0;
    var counter = 0;
    
    // target get guess 1 button and add click event listerner to run start function
    document.getElementById("guess1").addEventListener("click", start, false);

    // target get guess 2 button and add click event listerner to run start function
    document.getElementById("guess2").addEventListener("click", start, false);

    // target get guess3  button and add click event listerner to run start function
    document.getElementById("guess3").addEventListener("click", start, false);
        
    // target attempt buttons and run function
    $('.remove').click(function(){
        
        // remove a try button
        (this).remove();
        
        // increment counter by 1
        counter++
        
        // log the counter
        console.log(counter);
        
        // when the counter reaches 3
        if (counter === 3){
            
            //set answers html 
            document.getElementById("answers").innerHTML = "Your guesses were... " + "<br>" + answers[0] + "<br>" + answers[1] + "<br>" + answers[2];
            
            //set set random number html 
            document.getElementById("number").innerHTML = "My number was...  " + randomNum;
            
            // show retry button
            $("#retry").show();

            // hide guess input
            $('#guessInput').hide();

            // run retry
            document.getElementById("retry").addEventListener("click", retry);
        }
        
    });
        

    // start function
    function start(){
        
        // if input value number is == to a number
        if(isNaN(input.value) == false){
        
            // log input value
            console.log(input.value);
            
            // set value inputted to guess variable
            guess = parseInt(input.value);
            
            // add guess to answers array
            answers.push(guess);
        
            // log answer array
            console.log(answers);
            
            // if user guess is larger than random number 
            if(guess > randomNum)
            {
                // set output html
                output.innerHTML = "You guessed too high.";
                
                // clear input value
                input.value = "";
            }
            
            // if user guess is smaller than random number
            else if(guess < randomNum)
            {
                // set output html
                output.innerHTML = "You guessed too low.";
                
                // clear input value
                input.value = "";
                
            }
            
            // if user guess is equal to random number
            else if(guess === randomNum)
            {
                // set output
                output.innerHTML = "You guessed correct!";
                
                // clear input value
                input.value = "";
                
                // hide guesses
                $("#guess1, #guess2, #guess3").hide();
                
                // show retry button
                $("#retry").show();
            }
            
            else
            {
                output.innerHTML = "Enter another number number.";
            }
            
        }
     
    }
    
    // add keydownt event listener and run function
    document.addEventListener("keydown",function(event){
       
        // log the keydown event
        console.log(event.which);
        
        // if keydown event == 27 (esc key)
        if(event.which === 27){
            
            // hide all guesses
            $("#guess1, #guess2, #guess3").hide();
            
            // show retry
            $("#retry").show();
            
            // show random number
            document.getElementById("number").innerHTML = "My number was...  " + randomNum;
        }
        
        // add retry function to retry id
       document.getElementById("retry").addEventListener("click", retry);
        
    });
    
    // retry function
    function retry() {
            
            // reload webpage
            location.reload();
            
        }
          
});
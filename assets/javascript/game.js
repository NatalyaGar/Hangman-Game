 
 

//This array holds the words we are going to choose from.


      var wordList = [ "mozart" , "vivaldy" , "beethoven" , "tchaikovsky" ];


 //All variables for the game

      var choosenWord = "";
      var letterInChosenWord = [];
      var numBlanks = 0;
      var blanksAndSuccesses = [];
      var wrongGuesses =  [];
      var winCounter = 0;     
      var numGuesses = 15;

     


     function startGame() {

		    //numGuesses always equals 15, and blankAndSuccess is an empty array, 
		    //and wrongGueses is empty as well.   

			   wrongGuesses = [];
			   console.log("this is wrong guesses in startGame " + wrongGuesses);
			   numGuesses = 15;
			   blanksAndSuccesses = [];

		    // Randomly chooses a choice from wordList. This is the Computer's guess.
		       choosenWord = wordList[Math.floor(Math.random() * wordList.length )];  
		       letterInChosenWord = choosenWord.split("");
		       numBlanks = letterInChosenWord.length;
		       console.log(numBlanks);
		       console.log(choosenWord);

		    // Computer breaks down that random word as letters and replace them with
		    //   underscores _     
		     for(var i = 0; i < numBlanks; i++){
		         blanksAndSuccesses.push("_");
		     }
		     console.log(blanksAndSuccesses);

		     

		   // Add those underscores to the HTML to display to the player   
		    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
		    document.getElementById('guesses-left').innerHTML = numGuesses;
		  
		    console.log("chosen Word " + choosenWord );
		    console.log("number of blanks: " + numBlanks);
		    console.log("blanks&Succeses: " + blanksAndSuccesses);   
		  
    };
  


    function checkLetters(letter){
     
		     console.log(letter);  
		   
   
            //does the letter exist?
		    var letterInWord = false;
                        
            //does the letter match any letter in the word?
		    for(var i = 0; i < numBlanks; i++){
		        if(choosenWord[i] === letter){
		            letterInWord = true;

		        };
		    };

            // check where in word, the letter exists - then add to blanksAndSuccesses array

		    if(letterInWord){
		        for(i = 0; i < numBlanks; i++){
		            if(choosenWord[i] === letter){
                      blanksAndSuccesses[i] = letter;
                  
		            }

		        }

		    }


		    else{
		    	console.log('Hello from the else condition!');
		    	
		    	wrongGuesses.push(letter.toUpperCase());
		    	
		        numGuesses --;
		        console.log(numGuesses)
		    }

		     console.log(blanksAndSuccesses);
    }

		   

        function roundComplete(){
			   
                console.log ("Win Count:" + winCounter + "|Guesses Left : " + numGuesses);

			    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
			    document.getElementById('guesses-left').innerHTML = numGuesses;
			    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

			    console.log(letterInChosenWord);
			    console.log(blanksAndSuccesses);

			   
			    if(letterInChosenWord.join() === blanksAndSuccesses.join()){
			        winCounter++;

			       var composersNameHeading = document.getElementById('composersName');
			       
			       console.log(composersNameHeading ); 
			       composersNameHeading.innerHTML= choosenWord ;
			      
			        document.getElementById('win-counter').innerHTML = winCounter;
			        music();

			         
                                

			   
                    
			        startGame();
			    }
                  // check if player lost
			    else if(numGuesses == 0){
                    document.getElementById('wrong-guesses').innerHTML = "";
			        alert("you don't have any more guesses");  

			        startGame();
			    }
       
         }
    

    

		  startGame();
			                 //clicks           
					   document.onkeyup = function(event){
					     
					                  	
					    /*
					    1. its going to take in the letter that we type in
					    2. its going to pass it through the CheckLetters function 
					    */
					    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess
					    console.log("this is the letter you typed " + letterGuessed);
					    checkLetters(letterGuessed);

					    roundComplete();


		  }

	
     
		          // Gets Link for Theme Song
		         

		      	   var audioElement = document.createElement("audio");
		           audioElement.setAttribute("src", "assets/music/01Mozart_Symphony40InGMinorK550-1.MoltoAllegro.mp3");
                  
                 // music play button
		           $(".btn1").on("click", function() {
		            audioElement.play();                                    
                       });
                   //music pause button
		           $(".btn2").on("click", function() {
				        audioElement.pause();
				        // audioElementV.pause();
				      });
                    
                  


                           // play music when guesses is write for each composers 
                            
                function music() {
              
                       console.log(choosenWord);
                		
                			if (choosenWord === wordList[1]) {
	                			console.log("Hi vivaldy " + wordList );
						        audioElement.setAttribute("src", "assets/music/Antonio_vivaldi_Winter.mp3")
						        audioElement.play()
						        setTimeout(() => audioElement.play() , 1)

                            } 
                    	  
                    	  else if (choosenWord === wordList[0]) {
	                    		 console.log("Hi mozart " + wordList);
	          
						         audioElement.setAttribute("src", "assets/music/01Mozart_Symphony40InGMinorK550-1.MoltoAllegro.mp3")
						         audioElement.play()
						         setTimeout(() => audioElement.play() , 1)
                             }
                          
					    else if (choosenWord === wordList[2]) {
                               console.log("Hi beethoven " + wordList);
                              
					            audioElement.setAttribute("src", "assets/music/1-01Beethoven_Symphony5InCMinorOp.67-1.AllegroConBrio.mp3")
					           audioElement.play()
					           setTimeout(() => audioElement.play() , 1)
                             } 

                        
                         else if (choosenWord === wordList[3]) {
                               console.log("Hi tchaikovsky " + wordList);
                               
						       audioElement.setAttribute("src", "assets/music/11Tchaikovsky_NutcrackerSuiteOp.71a-WaltzOfTheFlowers.mp3")
						       audioElement.play()
	                           setTimeout(() => audioElement.play() , 1)
					         }      
                	
                }
                


















    

  






 

















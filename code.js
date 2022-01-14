function play() {
    // Set color of Result style font color to red
    document.getElementById("Result").style.color = "red";
    // Declare bet variable to 0 initially
    var bet = 0;
    // Prompt for a bet. If user input is less than 2 or greater than 12, repeat prompt!
    while(bet<2 || bet>12) {
    var bet = prompt("What number do you bet on? Enter number 2 to 12");
    }
    // Display Bet
    document.getElementById("bet").innerHTML = "Bet: "+bet;

    // Declare Variables to be Random Number between 1 and 6
    // Round the random number to the nearest whole number
    var die1 = Math.round(Math.random()*(6-1)+1);
    var die2 = Math.round(Math.random()*(6-1)+1);

    // Decare variable of Sum to equal to random dice numbers above.
    var sum = die1+die2;

    // Display Die 1 Roll in the die1 placeholder on casino.html
    document.getElementById("die1").innerHTML = "Die #1 = " + die1;
    // Display Die 2 Roll in the die2 placeholder on casino.html
    document.getElementById("die2").innerHTML = "Die #2 = " + die2;
    // Display Sum of the Roll in the Sum placeholder on casino.html
    document.getElementById("Sum").innerHTML = "Sum = " + sum;

    // If Sum of both Die Rolls = 7 or 11, display CRAPS result!
    if (sum == 7 || sum == 11)
    {
        // 7 or 11 typically loses, but if Player bets 7 or 11, they Win!
        if(bet == 7 && sum == 7) { 
            document.getElementById("Result").style.color = "green";
            document.getElementById("Result").innerHTML = "WOW! CRAPS BET and You Won!"; 
        } 
        else if(bet == 11 && sum == 11) { 
            document.getElementById("Result").style.color = "green";
            document.getElementById("Result").innerHTML = "WOW! CRAPS BET and You Won!"; 
        } 
        // If bet is not 7 or 11, and Sum result is 7 or 11, CRAPS lose!
        else { document.getElementById("Result").innerHTML = "CRAPS - You Lose"; }
    }
    // If not 7 or 11, and if Die 1 = Die 2 and is Even, display WIN result!
    else if (die1==die2 && die1%2 == 0)
    {
        document.getElementById("Result").style.color = "green";
        if(bet==sum) {
            document.getElementById("Result").innerHTML = "YOU ROLLED DOUBLES & YOUR BET WON!";
        }
        else { 
        document.getElementById("Result").innerHTML = "YOU ROLLED DOUBLES - Automatic Win";
        }
    }
    // If User Entered a Bet that is Equal to the Sum, Display Bet Wins!
    else if (sum==bet) { 
        document.getElementById("Result").style.color = "green";
        document.getElementById("Result").innerHTML = "Congrats! Your Bet Wins";
    }
    // If not 7 or 11, or if Die 1 != Die 2 and is not Even
    // or Bet is not equal to Sum, display LOSE result!
    else { 
        document.getElementById("Result").innerHTML = "Your Bet Lost!";
    }
}   
function Countdown() {

    // Variable Declarations for Countdown
    var countdowntimer = 10;

    // For Loop; set timeout to 10 seconds
    // If timeout is greater or = to 0 continue loop
    // Reduce timeout by 1 second each iteration
    for(var timeout=10000; timeout>=0; timeout-1000) {
    
    // setTimeout Library Function to Display Countdown Timer
    setTimeout(() => { 
        
        if(countdowntimer==0) { 
            // Edit innerHTML for CountdownDisplay to 0 then display Blastoff after
            document.getElementById("CountdownDisplay").innerHTML = countdowntimer;
            setTimeout(() => {
                // Display Blastoff after 1 second if Timer is at Countdown is at 0
                document.getElementById("CountdownDisplay").innerHTML = "Blastoff!";
                },1000)
        }
        else { 
            // If Countdown is not equal to 0, display current counter in the ID CountdownDisplay
            document.getElementById("CountdownDisplay").innerHTML = countdowntimer;
        }
        // Reduce countdown timer by 1 after each iteration
        countdowntimer=countdowntimer-1;
    }, timeout)
    // Reduce Timer by 1 Second (1000ms)
    timeout=timeout-1000;
    }
}
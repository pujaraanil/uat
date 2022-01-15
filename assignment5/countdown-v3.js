function Countdown() {

    // Variable Declarations for Countdown
    var countdowntimer = 10;

    // For Loop; set timeout to 10 seconds
    // If timeout is greater or = to 0 continue loop
    // Reduce timeout by 1 second each iteration
    for(var timeout=10000; timeout>=0; timeout-1000) {
    
    // setTimeout Library Function to Display Countdown Timer
    setTimeout(() => { 
        // Once countdown timer reaches 0, display Blastoff!
        if(countdowntimer==0) { 
            // Edit innerHTML for CountdownDisplay to 0 then display Blastoff after
            document.getElementById("CountdownWarning").innerHTML = "Blasting Off..."; // Additional notice at 0
            document.getElementById("CountdownDisplay").innerHTML = countdowntimer; // Show 0
            setTimeout(() => {
                // Display Blastoff after 1 second if Timer is at Countdown is at 0
                document.getElementById("CountdownDisplay").innerHTML = "Blastoff!"; // Display Blastoff! after countdown ended
                document.getElementById("CountdownWarning").innerHTML = ""; // Remove message in additional notice area.
                },1000)
        }
        else { 
            // If Countdown is not equal to 0, display current counter in the ID CountdownDisplay
            document.getElementById("CountdownDisplay").innerHTML = countdowntimer;
            if(countdowntimer<=5) {  // Display additional notice message if countdown is at 5 seconds or less!
                document.getElementById("CountdownWarning").innerHTML = "Warning Less than 1/2 way to launch, time left = " + countdowntimer;
            }
        }
        // Reduce countdown timer by 1 after each iteration
        countdowntimer=countdowntimer-1;
    }, timeout)
    // Reduce Timer by 1 Second (1000ms)
    timeout=timeout-1000;
    }
}
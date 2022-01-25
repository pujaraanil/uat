
// UAT IN SPACE by Anil Pujara
// JS Scripts & Code

        function clickBtn(action) {
                
                var today = new Date();
    
                    if(action == 'start') // If start button is the action
                    {
                    // Disable the start button and enable the stop button
                    document.getElementById("stopBtn").disabled = false; 
                    document.getElementById("startBtn").disabled = true;  

                    // Update Time elapsed in table chart to show timer has started and change background color to yellow
                    document.getElementById("time_elapsed").innerHTML = "Timer started...";
                    document.getElementById("time_elapsed").style.backgroundColor = 'yellow';
                    
                    // Play background music when Start button pressed
                    document.getElementById("audioMP3").play(); 
                    
                    // Clear all table data values
                    document.getElementById("latitude").innerHTML = "";
                    document.getElementById("longitude").innerHTML = "";
                    document.getElementById("gps").innerHTML = "";
                    document.getElementById("bmp_altitude").innerHTML = "";
                    document.getElementById("bmp_pressure").innerHTML = "";
                    document.getElementById("bmp_temp").innerHTML = "";
                    document.getElementById("digital_temp").innerHTML = "";
                    document.getElementById("css_temp").innerHTML = "";
                    document.getElementById("css_ec").innerHTML = "";
                    document.getElementById("css_tvoc").innerHTML = "";
                    document.getElementById("uv").innerHTML = "";
                    document.getElementById("accelx").innerHTML = "";
                    document.getElementById("accely").innerHTML = "";
                    document.getElementById("accelz").innerHTML = "";
                    document.getElementById("magx").innerHTML = "";
                    document.getElementById("magy").innerHTML = "";
                    document.getElementById("magz").innerHTML = "";
                    document.getElementById("gyrox").innerHTML = "";
                    document.getElementById("gyroy").innerHTML = "";
                    document.getElementById("gyroz").innerHTML = "";


    
                    // Set clickTime to get starting time in milliseconds since 00:00:00 1/1/1970
                    let clickTime = today.getTime();
    
                    // Set session variable of clickTime so value is accessible when stop button is clicked
                    sessionStorage.setItem("clickTime", clickTime);
    
                               
                    }
    
                    if(action == 'stop') // If stop button is the action
                    {
                    document.getElementById("audioMP3").pause(); 
                    // ^ Pause background music when Stop button pressed
                    
                    // Set newTime to get stop button time in milliseconds
                    let newTime = today.getTime();
    
                    // Calculate the differenceTime based on the newTime variable set and the session variable of start time
                    // Divide by 1000 to get result in seconds and round to one decimal place using Math.round function
                    var differenceTime = (newTime-sessionStorage.getItem("clickTime"))/1000;
                    var differenceTime = Math.round(differenceTime*10)/10
    
                    // Disable stop button and enable start button
                    document.getElementById("stopBtn").disabled = true; 
                    document.getElementById("startBtn").disabled = false;
                    
                    // Custom alert message for user friendliness
                    var alertmessage = "Script runtime: " + differenceTime + " seconds"; 
                    
                    // Update Time elapsed in table chart to the new time elapsed and background color to green
                    document.getElementById("time_elapsed").innerHTML = differenceTime + " seconds";
                    document.getElementById("time_elapsed").style.backgroundColor = "rgb(144,238,144,0.8)"; 
                    
                    // Alert message with amount of time in seconds elapsed between start and stop 
                    //alert(alertmessage);


                    // RANDOM NUMBER GENERATOR & DISPLAY IN TABLE DATA VALUES
                    var latitude = Number.parseFloat(Math.random()*(-90-90+1)+90).toFixed(4);
                    document.getElementById("latitude").innerHTML = latitude + "&#176;";

                    var longitude = Number.parseFloat(Math.random()*(-180-180+1)+180).toFixed(4);
                    document.getElementById("longitude").innerHTML = longitude + "&#176;";

                    var gps = Math.floor(Math.random()*100);
                    document.getElementById("gps").innerHTML = gps;

                    var bmp_altitude = Number.parseFloat(Math.random()*(50000-10000+1)+10000).toFixed(2);
                    document.getElementById("bmp_altitude").innerHTML = bmp_altitude;

                    var bmp_pressure = Number.parseFloat(Math.random()*(10-0+1)+0).toFixed(2);
                    document.getElementById("bmp_pressure").innerHTML = bmp_pressure;

                    var bmp_temp = 0;
                    document.getElementById("bmp_temp").innerHTML = bmp_temp;

                    var digital_temp = Number.parseFloat(Math.random()*(30-20+1)+20).toFixed(2);
                    document.getElementById("digital_temp").innerHTML = digital_temp;

                    var css_temp = Number.parseFloat(Math.random()*(40-20+1)+20).toFixed(2);
                    document.getElementById("css_temp").innerHTML = css_temp;

                    var css_ec = Number.parseFloat(Math.random()*(1400-400+1)+400).toFixed(0);
                    document.getElementById("css_ec").innerHTML = css_ec;

                    var css_tvoc = Number.parseFloat(Math.random()*(20-0+1)+0).toFixed(0);
                    document.getElementById("css_tvoc").innerHTML = css_tvoc;

                    var uv = Number.parseFloat(Math.random()*(20-0+1)+0).toFixed(0);
                    document.getElementById("uv").innerHTML = uv;

                    var accelx = Number.parseFloat(Math.random()*(-3-1.5+1)+1.5).toFixed(2);
                    document.getElementById("accelx").innerHTML = accelx;

                    var accely = Number.parseFloat(Math.random()*(-3-1.5+1)+1.5).toFixed(2);
                    document.getElementById("accely").innerHTML = accely;

                    var accelz = Number.parseFloat(Math.random()*(-3-1.5+1)+1.5).toFixed(2);
                    document.getElementById("accelz").innerHTML = accelz;

                    var magx = Number.parseFloat(Math.random()*(0-1.5+1)+1.5).toFixed(2);
                    document.getElementById("magx").innerHTML = magx;

                    var magy = Number.parseFloat(Math.random()*(-1-1.5+1)+1.5).toFixed(2);
                    document.getElementById("magy").innerHTML = magy;

                    var magz = Number.parseFloat(Math.random()*(-2-1+1)+1).toFixed(2);
                    document.getElementById("magz").innerHTML = magz;

                    var gyrox = Number.parseFloat(Math.random()*(-3-5+1)+5).toFixed(2);
                    document.getElementById("gyrox").innerHTML = gyrox;

                    var gyroy = Number.parseFloat(Math.random()*(-1-1+1)+1).toFixed(2);
                    document.getElementById("gyroy").innerHTML = gyroy;

                    var gyroz = Number.parseFloat(Math.random()*(-2-1.5+1)+1.5).toFixed(2);
                    document.getElementById("gyroz").innerHTML = gyroz;

                    }
            }

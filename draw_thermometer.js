<canvas id="myCanvas" width="480" height="340" style="border: solid 1px black"></canvas>
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            var therm_y = 55;
            var therm_height = 100;
            var increment = 25;
            var score = "";
            
            document.addEventListener ("click", mouseMoveHandler, false);
            function mouseMoveHandler(e) {
                    therm_y += increment;
                    therm_height -= increment;
                    score += "|";
            }

            function drawScore() {
                ctx.font = "16px Chalkboard";
                ctx.fillStyle = "#0095DD";
                ctx.fillText("Tally: " + score, 10, 330);
            }
            
            function drawThermometer() {
                ctx.beginPath();
                ctx.rect(55, therm_y, 50, therm_height);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
            }
            
            function drawThermBackground() {
                ctx.beginPath();
                ctx.rect(50, 50, 60, 110);
                ctx.fillStyle = "black";
                ctx.fill();
                ctx.closePath();
                
                ctx.beginPath();
                ctx.rect(55, 55, 50, 100);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.closePath();
            }
            
            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawThermBackground();
                drawThermometer();
                drawScore();
                requestAnimationFrame(draw);
            }
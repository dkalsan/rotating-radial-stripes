FRAME_RATE = 50;


function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(FRAME_RATE);
    noStroke();

    x_offset_input = 160
    x_offset_text = 200

    all_inputs = [];

    menuHidden = false;
    toggleMenuButton = createButton("Hide Menu");
    toggleMenuButton.position(20, 20);
    toggleMenuButton.size(135, 20);
    toggleMenuButton.mouseClicked(() => {
        if (menuHidden == true) {
            toggleMenuButton.html("Hide Menu");
            all_inputs.forEach(element => {
                element.show();
            });   
        } else {
            toggleMenuButton.html("Show Menu");
            all_inputs.forEach(element => {
                element.hide();
            });
        }
        menuHidden = !menuHidden;
    });

    ocRadius = 70;
    ocRadiusMin = 1;
    ocRadiusMax = 500;
    ocRadiusSlider = createSlider(ocRadiusMin, ocRadiusMax, ocRadius);
    ocRadiusSlider.position(20, 60);
    ocRadiusSlider.input(() => {
        ocRadius = ocRadiusSlider.value();
        ocRadiusInput.value(ocRadius);
    });
    ocRadiusInput = createInput(ocRadius.toString());
    ocRadiusInput.position(x_offset_input, 60);
    ocRadiusInput.size(25, 15);
    ocRadiusInput.changed(() => {
        ocRadius = ocRadiusInput.value();
        ocRadius = Math.max(Math.min(ocRadius, ocRadiusMax), ocRadiusMin);
        ocRadiusInput.value(ocRadius);
        ocRadiusSlider.value(ocRadius);
    });
    all_inputs.push(ocRadiusSlider);
    all_inputs.push(ocRadiusInput);
    
    icRadiusRatio = 60;
    icRadiusRatioMin = 0;
    icRadiusRatioMax = 100;
    icRadiusRatioSlider = createSlider(icRadiusRatioMin, icRadiusRatioMax, icRadiusRatio);
    icRadiusRatioSlider.position(20, 90);
    icRadiusRatioSlider.input(() => {
        icRadiusRatio = icRadiusRatioSlider.value();
        icRadiusRatioInput.value(icRadiusRatio);
    });
    icRadiusRatioInput = createInput(icRadiusRatio.toString());
    icRadiusRatioInput.position(x_offset_input, 90);
    icRadiusRatioInput.size(25, 15);
    icRadiusRatioInput.changed(() => {
        icRadiusRatio = icRadiusRatioInput.value();
        icRadiusRatio = Math.max(Math.min(icRadiusRatio, icRadiusRatioMax), icRadiusRatioMin);
        icRadiusRatioInput.value(icRadiusRatio);
        icRadiusRatioSlider.value(icRadiusRatio);
    });
    all_inputs.push(icRadiusRatioSlider);
    all_inputs.push(icRadiusRatioInput);

    numStripes = 8;
    numStripesMin = 2;
    numStripesMax = 150;
    numStripesSlider = createSlider(numStripesMin, numStripesMax, numStripes);
    numStripesSlider.position(20, 120);
    numStripesSlider.input(() => {
        numStripes = numStripesSlider.value();
        numStripesInput.value(numStripes);
    });
    numStripesInput = createInput(numStripes.toString());
    numStripesInput.position(x_offset_input, 120);
    numStripesInput.size(25, 15);
    numStripesInput.changed(() => {
        numStripes = numStripesInput.value();
        numStripes = Math.max(Math.min(numStripes, numStripesMax), numStripesMin);
        numStripesInput.value(numStripes);
        numStripesSlider.value(numStripes);
    });
    all_inputs.push(numStripesSlider);
    all_inputs.push(numStripesInput);

    rotationSpeed = 1.0;
    rotationSpeedMin = -6.25;
    rotationSpeedMax = 6.25;
    rotationSpeedSlider = createSlider(rotationSpeedMin, rotationSpeedMax, rotationSpeed, 0.05);
    rotationSpeedSlider.position(20, 150);
    rotationSpeedSlider.input(() => {
        rotationSpeed = rotationSpeedSlider.value();
        rotationSpeedInput.value(rotationSpeed);
    });
    rotationSpeedInput = createInput(rotationSpeed.toString());
    rotationSpeedInput.position(x_offset_input, 150);
    rotationSpeedInput.size(25, 15);
    rotationSpeedInput.changed(() => {
        rotationSpeed = rotationSpeedInput.value();
        rotationSpeed = rotationSpeed.replace(/,/g, ".")
        rotationSpeed = Math.max(Math.min(rotationSpeed, rotationSpeedMax), rotationSpeedMin);
        rotationSpeedInput.value(rotationSpeed);
        rotationSpeedSlider.value(rotationSpeed);
    });
    all_inputs.push(rotationSpeedSlider);
    all_inputs.push(rotationSpeedInput);

    stripeColor1 = "#FFFFFF";
    stripeColorInput1 = createInput(stripeColor1);
    stripeColorInput1.position(20, 180);
    stripeColorInput1.style("width", `${rotationSpeedSlider.width}px`);
    stripeColorInput1.changed(() => {
        stripeColor1 = stripeColorInput1.value();
    });
    all_inputs.push(stripeColorInput1);
    
    stripeColor2 = "#000000";
    stripeColorInput2 = createInput(stripeColor2);
    stripeColorInput2.position(20, 210);
    stripeColorInput2.style("width", `${rotationSpeedSlider.width}px`);
    stripeColorInput2.changed(() => {
        stripeColor2 = stripeColorInput2.value();
    });
    all_inputs.push(stripeColorInput2);

    icColor = "#B8B8B8";
    icColorInput = createInput(icColor);
    icColorInput.position(20, 240);
    icColorInput.style("width", `${rotationSpeedSlider.width}px`);
    icColorInput.changed(() => {
        icColor = icColorInput.value();
    });
    all_inputs.push(icColorInput);

    numCircles = 1;
    numCirclesMin = 1;
    numCirclesMax = 100;
    numCirclesSlider = createSlider(numCirclesMin, numCirclesMax, numCircles);
    numCirclesSlider.position(20, 270);
    numCirclesSlider.input(() => {
        numCircles = numCirclesSlider.value();
        numCirclesInput.value(numCircles);
    });
    numCirclesInput = createInput(numCircles.toString());
    numCirclesInput.position(x_offset_input, 270);
    numCirclesInput.size(25, 15);
    numCirclesInput.changed(() => {
        numCircles = numCirclesInput.value();
        numCircles = Math.max(Math.min(numCircles, numCirclesMax), numCirclesMin);
        numCirclesInput.value(numCircles);
        numCirclesSlider.value(numCircles);
    });
    all_inputs.push(numCirclesSlider);
    all_inputs.push(numCirclesInput);

    interCircleSpace = 30;
    interCircleSpaceMin = 0;
    interCircleSpaceMax = 200;
    interCircleSpaceSlider = createSlider(interCircleSpaceMin, interCircleSpaceMax, interCircleSpace);
    interCircleSpaceSlider.position(20, 300);
    interCircleSpaceSlider.input(() => {
        interCircleSpace = interCircleSpaceSlider.value();
        interCircleSpaceInput.value(interCircleSpace);
    });
    interCircleSpaceInput = createInput(interCircleSpace.toString());
    interCircleSpaceInput.position(x_offset_input, 300);
    interCircleSpaceInput.size(25, 15);
    interCircleSpaceInput.changed(() => {
        interCircleSpace = interCircleSpaceInput.value();
        interCircleSpace = Math.max(Math.min(interCircleSpace, interCircleSpaceMax), interCircleSpaceMin);
        interCircleSpaceInput.value(interCircleSpace);
        interCircleSpaceSlider.value(interCircleSpace);
    });
    all_inputs.push(interCircleSpaceSlider);
    all_inputs.push(interCircleSpaceInput);

    play = true;
    playStopButton = createButton("Pause");
    playStopButton.position(20, 330)
    playStopButton.size(135, 20);
    playStopButton.mouseClicked(() => {
        if (play == true) {
            playStopButton.html("Resume")
        } else {
            playStopButton.html("Pause")
        }
        play = !play;
    });
    all_inputs.push(playStopButton);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
 }


function draw() {

    background("#121212");

    if (!menuHidden) {
        // Draw divider
        divider_width = textWidth(`(${interCircleSpace}) Space between circles`) + interCircleSpaceSlider.x * 2 + interCircleSpaceSlider.width + 30
        
        push();
        fill("#272727");
        rect(0, 0, divider_width, height);
        pop();

        // Draw text
        fill("#FFFFFF");
        text("Radius", x_offset_text, 60 + 7);
        text("Inner/Outer ratio (%)", x_offset_text, 90 + 7);
        text("Number of stripes", x_offset_text, 120 + 7);
        text("Rotation speed (rad/s)", x_offset_text, 150 + 7);
        text("Stripe color 1", x_offset_text, 180 + 7);
        text("Stripe color 2", x_offset_text, 210 + 7);
        text("Inner circle color", x_offset_text, 240 + 7);
        text("Number of circles", x_offset_text, 270 + 7);
        text("Space between circles", x_offset_text, 300 + 7);

        remainingWidth = width - divider_width;
    } else {
        divider_width = 0;
        remainingWidth = width;
    }

    
    maxCols = Math.floor(remainingWidth / (ocRadius*2 + interCircleSpace));
    maxRows = Math.floor(height / (ocRadius*2 + interCircleSpace));

    if (numCircles > maxCols*maxRows && !menuHidden) {
        fill("#FF0000");
        text(`Max ${maxCols*maxRows} circles can be drawn due to space restriction.`,
            15,
            playStopButton.y + 37);
    }

    for (let i = 0; i < Math.min(numCircles, maxCols*maxRows); i++) {
        x_offset = 10 + divider_width + (i%maxCols)*(ocRadius*2 + interCircleSpace) + ocRadius; 
        y_offset = 45 + (Math.floor(i/maxCols)*(ocRadius*2 + interCircleSpace) + ocRadius);

        // Draw main circle
        push();
        translate(x_offset, y_offset);
        fill(stripeColor1);
        circle(0, 0, ocRadius*2);
        pop();

        // Draw stripes
        push();
        translate(x_offset, y_offset);
        if (rotationSpeed != 0 && play == true) {
            rotate((frameCount / FRAME_RATE) * rotationSpeed);
        }
        fill(stripeColor2);
        polygon(0, 0, ocRadius, numStripes);
        pop();

        // Draw inner circle
        push();
        translate(x_offset, y_offset);
        fill(icColor);
        circle(0, 0, ocRadius*(icRadiusRatio/100)*2);
        pop();
    }
}

  
function polygon(x, y, r, numStripes) {
	let angle = PI/numStripes;

    beginShape();
    for (let i = 0; i < numStripes; i++) { 

        vertex(x, y);

        let sx2 = x + (cos(2*i*angle)) * r;
        let sy2 = y + (sin(2*i*angle)) * r;
        vertex(sx2, sy2);

        let sx3 = x + (cos((2*i+1)*angle)) * r;
        let sy3 = y + (sin((2*i+1)*angle)) * r;
        vertex(sx3, sy3);
    }
    endShape(CLOSE)
}

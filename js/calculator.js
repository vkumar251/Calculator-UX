// Arithmetics
function addNumbers()
{
    const output = document.querySelector("#add-card div.card-footer p#add-results");

    // get values from input fields
    var x = parseFloat(document.querySelector("#add-1").value);
    var y = parseFloat(document.querySelector("#add-2").value);

    // calculate and validate answer
    var z = (x + y);  
    if (isNaN(z))
    {
        output.textContent = "Error: Please enter valid numbers";
        return;
    }

    // display results
    output.textContent = "Result: " + z;
}
function subtractNumbers()
{
    const output = document.querySelector("#subtract-card div.card-footer p#subtract-results");

    // get values
    var x = parseFloat(document.querySelector("#subtract-1").value);
    var y = parseFloat(document.querySelector("#subtract-2").value);

    // calculate and validate
    var z = (x - y);
    if (isNaN(z))
    {
        output.textContent = "Error: Please enter valid numbers";
        return;
    }

    // display results
    output.textContent = "Result: " + z;
}
function multiplyNumbers()
{
    const output = document.querySelector("#multiply-card div.card-footer p#multiply-results");

    // get values
    var x = parseFloat(document.querySelector("#multiply-1").value);
    var y = parseFloat(document.querySelector("#multiply-2").value);

    // calculate and validate
    var z = (x * y);
    if (isNaN(z))
    {
        output.textContent = "Error: Please enter valid numbers";
    }
    else
    {
        // display results
        output.textContent = "Result: " + z;
    }
}
function divideNumbers()
{
    const output = document.querySelector("#divide-card div.card-footer p#divide-results");

    // get values
    var x = parseFloat(document.querySelector("#divide-1").value);
    var y = parseFloat(document.querySelector("#divide-2").value);

    // display error
    if (y === 0)
    {
        output.textContent = "Error: Cannot divide by zero";
    }
    else
    {
        // calculate and validate
        var z = (x / y);
        
        if (isNaN(z))
        {
            output.textContent = "Error: Please enter valid numbers";
        }
        else
        {
            // display results
            output.textContent = "Result: " + z;
        }
    }
}

// 2D Shapes
function calcSquarePerim() // square perimeter
{
    const length = parseFloat(document.querySelector("#square-length").value);
    const formula = (length + length) * 2;
    const output = document.querySelector("#square-card div.card-footer p#square-results");

    if (isNaN(formula))
    {
        output.textContent = "Error: Please enter valid numbers";
    }
    else
    {
        if (document.querySelector("#square-rounded").checked)
        {
            output.textContent = "Result: " + formula.toFixed(2);
            return;
        }

        output.textContent = "Result: " + formula;
    }
    
}
function calcSquareArea() // square area
{
    const length = parseFloat(document.querySelector("#square-length").value);
    const formula = (length * length);
    const output = document.querySelector("#square-card div.card-footer p#square-results");

    if (isNaN(formula))
    {
        output.textContent = "Error: Please enter valid numbers";
    }
    else
    {
        if (document.querySelector("#square-rounded").checked)
        {
            output.textContent = "Result: " + formula.toFixed(2);
            return;
        }

        output.textContent = "Result: " + formula;
    }
}
function calcRectanglePerim() // rectangle perimeter
{
    const height = parseFloat(document.querySelector("#rectangle-height").value);
    const width = parseFloat(document.querySelector("#rectangle-width").value);
    const formula = (height + width) + (height + width);
    const output = document.querySelector("#rectangle-card div.card-footer p#rectangle-results");

    if (isNaN(formula))
    {
        output.textContent = "Error: Please enter valid numbers";
    }
    else
    {
        if (document.querySelector("#rectangle-rounded").checked)
        {
            output.textContent = "Result: " + formula.toFixed(2);
            return;
        }

        output.textContent = "Result: " + formula;
    }
}
function calcRectangleArea() // rectangle area
{
    const height = parseFloat(document.querySelector("#rectangle-height").value);
    const width = parseFloat(document.querySelector("#rectangle-width").value);
    const formula = (height * width);
    const output = document.querySelector("#rectangle-card div.card-footer p#rectangle-results");

    if (isNaN(formula))
    {
        output.textContent = "Error: Please enter valid numbers";
    }
    else
    {
        if (document.querySelector("#rectangle-rounded").checked)
        {
            output.textContent = "Result: " + formula.toFixed(2);
            return;
        }

        output.textContent = "Result: " + formula;
    }
}
function calcCircleCircum() // circle circumference
{
    const diameter = parseFloat(document.querySelector("#circle-diameter").value);
    const formula = (diameter * Math.PI);
    const output = document.querySelector("#circle-card div.card-footer p#circle-results");

    if (isNaN(formula))
    {
        output.textContent = "Error: Please enter valid numbers";
    }
    else
    {
        if (document.querySelector("#circle-rounded").checked)
        {
            output.textContent = "Result: " + formula.toFixed(2);
            return;
        }

        output.textContent = "Result: " + formula;
    }
}
function calcCircleArea() // circle area
{
    const diameter = parseFloat(document.querySelector("#circle-diameter").value);
    const radius = (diameter / 2);
    const formula = (radius * radius) * Math.PI;
    const output = document.querySelector("#circle-card div.card-footer p#circle-results");

    if (isNaN(formula))
    {
        output.textContent = "Error: Please enter valid numbers";
    }
    else
    {
        if (document.querySelector("#circle-rounded").checked)
        {
            output.textContent = "Result: " + formula.toFixed(2);
            return;
        }

        output.textContent = "Result: " + formula;
    }
}

// 3D Shapes
function calcCubeVol() // volume of cube
{
    const length = parseFloat(document.querySelector("#cube-length").value);
    const formula = (length * length * length);
    const output = document.querySelector("#cube-card div.card-footer p#cube-results");

    if (isNaN(formula))
    {
        output.textContent = "Error: Please enter valid numbers";
    }
    else
    {
        if (document.querySelector("#cube-rounded").checked)
        {
            output.textContent = "Result: " + formula.toFixed(2);
            return;
        }

        output.textContent = "Result: " + formula;
    }
}
function calcCuboidVol() // volume of cuboid
{
    const length = parseFloat(document.querySelector("#cuboid-length").value);
    const width = parseFloat(document.querySelector("#cuboid-width").value);
    const height = parseFloat(document.querySelector("#cuboid-height").value);
    const formula = (length * width * height);
    const output = document.querySelector("#cuboid-card div.card-footer p#cuboid-results");

    if (isNaN(formula))
    {
        output.textContent = "Error: Please enter valid numbers";
    }
    else
    {
        if (document.querySelector("#cuboid-rounded").checked)
        {
            output.textContent = "Result: " + formula.toFixed(2);
            return;
        }

        output.textContent = "Result: " + formula;
    }
}
function calcCylinderVol() // volume of cylinder
{
    const radius = parseFloat(document.querySelector("#cylinder-radius").value);
    const height = parseFloat(document.querySelector("#cylinder-height").value);
    const formula = Math.PI * (radius * radius) * height;
    const output = document.querySelector("#cylinder-card div.card-footer p#cylinder-results");

    if (isNaN(formula))
    {
        output.textContent = "Error: Please enter valid numbers";
    }
    else
    {
        if (document.querySelector("#cylinder-rounded").checked)
        {
            output.textContent = "Result: " + formula.toFixed(2);
            return;
        }

        output.textContent = "Result: " + formula;
    }
}
function calcSphereVol() // volume of sphere
{
    const radius = parseFloat(document.querySelector("#sphere-radius").value);
    const formula = (4 / 3) * Math.PI * (radius * radius * radius);
    const output = document.querySelector("#sphere-card div.card-footer p#sphere-results");

    if (isNaN(formula))
    {
        output.textContent = "Error: Please enter valid numbers";
    }
    else
    {
        if (document.querySelector("#sphere-rounded").checked)
        {
            output.textContent = "Result: " + formula.toFixed(2);
            return;
        }

        output.textContent = "Result: " + formula;
    }
}
function calculateBMI()
{
    const weight = parseFloat(document.querySelector("#bmi-weight").value);
    const heightCM = parseFloat(document.querySelector("#bmi-height").value);
    const heightM = (heightCM / 100); // convert height cm to m
    const formula = weight / (heightM * heightM); // calculate BMI
    const output = document.querySelector("#bmi-calculator div.card-footer p#bmi-results");

    if (isNaN(formula))
    {
        output.textContent = "Error: Please enter valid numbers";
    }
    else
    {
        if (formula <= 18.5) // underweight
        {
            output.textContent = "Result: " + formula.toFixed(2) + " - Underweight";
        }
        else if (formula >= 18.6 && formula <= 24.9) // healthy weight
        {
            output.textContent = "Result: " + formula.toFixed(2) + " - Healthy weight";
        }
        else if (formula >= 25.0 && formula <= 29.9) // overweight
        {
            output.textContent = "Result: " + formula.toFixed(2) + " - Overweight";
        }
        else if (formula >= 30.0) // obese
        {
            output.textContent = "Result: " + formula.toFixed(2) + " - Obese";
        }
    }
}
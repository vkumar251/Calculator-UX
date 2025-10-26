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
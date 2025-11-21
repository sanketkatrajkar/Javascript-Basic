let name = "Sanket";

let sum = function(a, b)
{
    return a + b;
}

console.log(sum);

function muiltipleGreet(func , count)
{
    for(let i = 0; i <= count; i++)
    {
        func();
    }
}

let greet = function()
{
    console.log("Hello");
}

console.log(muiltipleGreet(greet, 3));


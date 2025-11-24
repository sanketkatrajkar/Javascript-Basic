

function outerFunction ()
{
    let name = "Babbar";

    function innerFunction()
    {
        console.log(name);
    }

    innerFunction();
}

let inner = outerFunction();

console.log(inner);
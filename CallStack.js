

function Hello ()
{
    console.log("Inside the Hello fun");
    console.log("Hello Done");
}

function Demo()
{
    console.log("Calling Hello fuc");
    Hello();
}

console.log("Calling Demo fun");
Demo();
console.log("Demo Done");


// Visualizing the call stack


function One ()
{
    return 1;
}

function Two()
{
    return One() + One();
}

function Three()
{
   let ans =  Two() + One();
   console.log(ans);
}

Three();
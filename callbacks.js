//how to write call back 
//what is the use of callback

//function that is passed as an argument to another function
//when you are done call this next 


function hello(callback)
{
    setTimeout(()=>{
        console.log("hello")
        callback();

    },1000);


}
function goodbye()
{
    console.log("goodbye");

}
hello(goodbye);



function sum(x,y,callback)
{
    let result=x+y;
    callback(result);

    

}

function displayresult(result)
{
    console.log(result);

}
sum(1,2,displayresult);




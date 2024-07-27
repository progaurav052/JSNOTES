function wakeup(callback)
{
    setTimeout(()=>{
        console.log("wakeup");
        callback();

    },1000);

    

}
function eat(callback)
{
    setTimeout(()=>{
        console.log("eat");
        callback();

    },1000);
    

}
function sleep(callback)
{
    setTimeout(()=>{
        console.log("sleep");
        callback();

    },1000);

}
wakeup(()=>{
    eat(()=>{
        sleep(()=>{
            console.log("all tasks done");

        })
    })
});
//this is so messy 


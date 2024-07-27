function wakeup() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("wakeup");
            resolve();
        }, 1000);
    });
}

function eat() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("eat");
            resolve();
        }, 1000);
    });
}

function sleep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("sleep");
            resolve();
        }, 1000);
    });
}


wakeup().then((rej,res)=>{console.log(res);return eat();})
.then((rej,res)=>{console.log(res);return sleep();})
.then((rej,res)=>{console.log("all tasks done",res);})


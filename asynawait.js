function wakeup() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("wakeup");
            resolve();
        }, 1000);
    });
}

function eat() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("eat");
            resolve();
        }, 1000);
    });
}

function sleep() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("sleep");
            resolve();
        }, 1000);
    });
}

async function start() {
    await wakeup();
    await eat();
    await sleep();
}

start();

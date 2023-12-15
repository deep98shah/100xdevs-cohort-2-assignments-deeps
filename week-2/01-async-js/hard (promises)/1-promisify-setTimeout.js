/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('Done!')
        }, n*1000)
    })
}

async function asyncWait(n) {
    let prom = await wait(n);
    console.log(prom)
    prom.then((str) => {
        console.log(str)
    });
}

asyncWait(5)

module.exports = wait;

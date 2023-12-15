/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve('Done from prom 1')
        }, 1000)
    })
}

function waitTwoSecond() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve('Done from prom 2')
        }, 2000)
    })
}

function waitThreeSecond() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve('Done from prom 3')
        }, 3000)
    })

}

function calculateTime() {
    before = new Date().getTime()
    waitOneSecond().then((data) => {
        console.log(data)
        return waitTwoSecond()
    }).then((data) => {
        console.log(data)
        return waitThreeSecond()
    }).then((data) => {
        console.log(data)
        console.log('Time to complete: ' + Math.floor((new Date().getTime() - before)/1000))
    })
}

calculateTime()
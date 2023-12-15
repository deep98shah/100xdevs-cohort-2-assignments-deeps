/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function myAwait(seconds) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('Done')
        }, seconds * 1000)
    })
}
async function sleep (seconds) {
    const d = await myAwait(seconds)
    console.log('should be logged after ' + seconds +  'second')
}


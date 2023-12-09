/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const currDate1 = new Date();
    t1 = currDate1.getTime();
    let sum = 0;
    for (let i=1; i<=n; i+=1) {
        sum += i
    }
    const currDate2 = new Date();
    t2 = currDate2.getTime();
    const diff = t2 - t1;
    console.log(diff)
}

calculateTime(100000000000000)
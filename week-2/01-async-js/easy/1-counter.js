
i = 1
myInterval = setInterval(() => {
    console.log(i);
    i += 1;
}, 1000);

setTimeout(() => {
    console.log("Done!");
    clearInterval(myInterval)
}, 5000)
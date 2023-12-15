function mySetInterval(n) {
    for (let i = 1; i <= n; i++) {
        setTimeout(() => {console.log(i)}, i*1000)
    }
}

mySetInterval(5)
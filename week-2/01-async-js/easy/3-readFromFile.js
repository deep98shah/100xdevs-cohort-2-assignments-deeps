const fs = require("fs")

fs.readFile('week-2\\01-async-js\\easy\\temp', "utf-8", (err, data) => {
    console.log(data)
})

s = 0
for (let i=0; i<100000000; i++) {
    s += i
}
console.log(s)
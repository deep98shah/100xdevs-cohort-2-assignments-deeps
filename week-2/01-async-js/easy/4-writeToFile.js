const fs = require("fs")

fs.writeFile('week-2\\01-async-js\\easy\\temp', 'Written from JS', () => {
    console.log('File written!')
})

s = ''
for (let i=0; i<1000000; i+=1) {
    s += i.toString()
}
console.log(s)
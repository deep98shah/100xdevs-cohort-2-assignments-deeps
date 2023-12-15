const fs = require('fs')

function myReadFile(file) {
    return new Promise(function(resolve) {
        fs.readFile(file, 'utf-8', (err, data) => {
            resolve(data)
        })
    })
}

file = 'week-2\\01-async-js\\medium\\temp'

myReadFile(file).then((data) => {
        console.log('data before: ', data)
        data = data.replace(/\s+/g, ' ')
        fs.writeFile(file, data, () => {})
        myReadFile(file).then((data) => {
            console.log('data after: ', data)
        })
})


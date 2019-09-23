const fs = require('fs');
const path  = require('path');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    save() {
        console.log("save method", this);
        const p = path.join('process.mainModule.filename',
        'data',
        'products.json'
        )

        fs.readFile(p, (err, fileContent)=>{
            console.log(err);
        })
    }
    static fetchAll() {
        console.log("fetchAll method")
        return products;
    }
}
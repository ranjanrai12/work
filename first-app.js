const fs = require('fs');

fs.writeFileSync('hello.txt','Hello from nodejs')
function world(...universe) {
    console.log(universe);
}
world('india','USA','UK')
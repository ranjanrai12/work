var person = {
    name: 'ranjan',
    age: 26,
    greet() { 
        console.log(this.name);
    }
}

const hobbies = ['singing','playing']
let hhhhhhhhh = hobbies.map((data)=>{
    return `My Hobbies is : ${data}`;
});
console.log(hhhhhhhhh);
for(let hobbie of hobbies) {
    console.log(hobbie);
}
hobbies.push('dancing');
const [hob1,hob2] = hobbies;
console.log(hob1,hob2);
function hello({name,age}) {
    console.log("name is :", name + ' and age is :', age );
}
hello(person);

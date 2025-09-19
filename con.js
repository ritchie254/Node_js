const path = require('path')
const numb = 12;

if (numb > 10){
	console.log("number i s big");
}else{
	console.log("number is small");
}

console.log("program is finished....");
console.log(__dirname)
const whole = path.resolve(__dirname, 'myfold', 'name.txt')
console.log(whole)

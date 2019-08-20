var chalk = require('chalk');
function dog(name){
	this.name = name;
}

dog.prototype.sayHi = function(){
	console.log('Hi! my name is ' + chalk.yellow(this.name));
};
module.exports = dog;

var chalk = require('chalk');
function dog(name,stomach){
	this.name = name;
	this.stomach = [];
}
dog.prototype.eat = function(cat){
	this.stomach.push(cat);
};

dog.prototype.sayHi = function(){
	console.log('Hi! my name is ' + chalk.yellow(this.name));
};
module.exports = dog;

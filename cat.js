function cat(name,age){
	this.name = name;
	this.age = age;
}
let cat1 = new cat('Tom',25);

module.exports = cat;
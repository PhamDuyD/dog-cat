function horse(name){
	this.name = name;
}
horse.prototype.sayHi = function(){
	console.log(`Hi my name is ${this.name}`);
}
module.exporst = horse;
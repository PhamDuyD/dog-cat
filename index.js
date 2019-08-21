var dog = require('./dog');
var cat = require('./cat');

var dog1 = new dog('Spite');
var cat1 = new cat('Lucas',22);
dog1.sayHi();
dog1.eat(cat1);
console.log(dog1);


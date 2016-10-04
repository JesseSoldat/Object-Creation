let dog = {
	sound: 'woof',
	talk: function(){
		console.log(this.sound);
	}
}

// dog.talk();

let talkFunction = dog.talk;
let boundFunction = talkFunction.bind(dog);


// talkFunction()
// boundFunction()

let button = document.getElementById('clickMe');

button.addEventListener('click', dog.talk.bind(dog))

let pig = function() {
	console.log(this.sound);
}
let oinky = {
	sound: 'oink'
}
let pigBound = pig.bind(oinky);
// pig()
// pigBound()


let sheep = function() {
	console.log(this.sound);
}
let sheepy = {
	speak: sheep,
	sound: 'baa'
}
// sheepy.speak();

let cow = function(){
	console.log(this.sound);
}

let mooy = {
	sound: 'moo'
}

mooy.speak = cow.bind(mooy)
mooy.cry = cow

// mooy.speak()

let calf = {
	cry: mooy.cry,
	sound: 'moo.....'
}
// calf.cry()

//PART 3 Prototypes

function noise(){
	console.log(this);
	console.log(this.sound);
}
let animal = {
	// noise: noise
	noise  //ECMA 6	
}

// animal.noise()
let cat = {
	sound: 'meow!'
}
Object.setPrototypeOf(cat, animal)
// cat.noise()

let kitten = {
	pur: function(){
		console.log(this.sound.toUpperCase());
	}
}
Object.setPrototypeOf(kitten, cat)
// kitten.pur()


//PART 4 'New'
function Person(saying){
	this.saying = saying
}

Person.prototype.talk = function(){
	console.log("I say: ", this.saying);
}

// var Jesse = new Person('Lets get ready to rumble!')
// Jesse.talk()

// var Nate = new Person('ATL Baby!')
// Nate.talk()


function newer(constructor){
	var obj = {}
	Object.setPrototypeOf(obj, constructor.prototype)

	// var argsArray = Array.from(arguments).slice(1)   //ES6

	var argsArray = Array.prototype.slice.apply(arguments).slice(1)   //ES5

	// console.log(argsArray);

	constructor.apply(obj, argsArray)

	return obj

}
var Mark = newer(Person, 'Shake those weary hips!')

Mark.talk()

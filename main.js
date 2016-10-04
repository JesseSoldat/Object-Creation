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

mooy.speak()





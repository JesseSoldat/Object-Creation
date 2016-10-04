let dog = {
	sound: 'woof',
	talk: function(){
		console.log(this.sound);
	}
}

dog.talk();
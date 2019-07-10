const makeSound = function() {
    console.log(this.sound)
}

const makeCat = function(sound) {
    return {
        sound: sound,
        makeSound: makeSound,
    }
}

const cats = []

for (let i = 0; i < 100; i++) {
    cats.push(makeCat('Miauuuu'))
    return cats
}

cats.push(makeCat('Wofff'))
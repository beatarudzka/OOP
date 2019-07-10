  const catPrototype = {
      sound: 'Meow!',
      makeSound: function() {
          console.log(this.sound)
      }
  }

  const cat1 = Object.create(catPrototype)
  cat1.sound = 'Bark!'
  cat1.makeSound()
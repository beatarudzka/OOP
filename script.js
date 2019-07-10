  window.name = 'Ala'

  function makeSayHello() {
      const sayHello = () => console.log('Hello ' + this.name)

      return sayHello
  }

  const sayHello = makeSayHello()

  const me = {
      name: 'Mateusz',
      makeSayHello: makeSayHello
  }

  me.sayHello = me.makeSayHello()

  // sayHello()

  // me.sayHello()

  const sayHelloNew = sayHello
  const meSayHelloNew = me.sayHello

  sayHelloNew()
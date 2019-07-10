  //bind, call, apply - jestesmy w stanie zmienic kontekst wywołania funkcji

  window.name = 'Ala'

  function sayHello(greetings = 'Hello', mark = '!') {
      console.log(greetings + ' ' + this.name + mark)

  }
  sayHello.apply()
  sayHello.apply({ name: 'Beata' })
  sayHello.apply({ name: 'Beata' }, ['Hi', '?'])
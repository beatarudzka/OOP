  //bind, call, apply - jestesmy w stanie zmienic kontekst wywołania funkcji

  window.name = 'Ala'

  function SayHello(greetings = 'Hello', mark = '!') {
      console.log(greetings + ' ' + this.name + mark)

  }
  SayHello()
  SayHello('Hi', '?')

  SayHello.call({ name: 'Mateusz' })
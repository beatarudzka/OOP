  //bind, call, apply - jestesmy w stanie zmienic kontekst wywołania funkcji

  window.name = 'Ala'

  function sayHello(greetings = 'Hello', mark = '!') {
      console.log(greetings + ' ' + this.name + mark)

  }
  const name = 'Mateusz'
  const args = ['Heloooo', '??']


  sayHello.apply({ name }, args)
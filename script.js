window.name = 'Ala'

function sayHello(greetings = 'Hello', mark = '!') {
    console.log(greetings + ' ' + this.name + mark)
}

const boundSayHello = sayHello.bind({ name: 'Mateusz' })

sayHello()
boundSayHello()

boundSayHello.call({ name: 'Eugeniusz' }) // do not work
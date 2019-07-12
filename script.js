class Rectangle {
    constructor(a, b, backgroundColor) {
        this.a = a
        this.b = b
        this.backgroundColor = backgroundColor
        this.element = null
    }

    render() {
        this.element = this.element || document.createElement('div')

        this.element.style.width = this.a + 'px'
        this.element.style.height = this.b + 'px'
        this.element.style.backgroundColor = this.backgroundColor

        return this
    }

    append(container = document.body) {
        container.appendChild(this.element)

        return this
    }
}

class Square extends Rectangle {
    constructor(a, backgroundColor) {
        super(a, a, backgroundColor)
    }
}

class Circle extends Square {
    render() {
        super.render()

        this.element.style.borderRadius = '50%'

        return this
    }
}

class Game {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        }
        this.square = (new Square(20, 'red')).render()
    }

    append(container = document.body) {
        container.appendChild(this.square.element)

        return this
    }
}

const game1 = new Game()
game1.append()
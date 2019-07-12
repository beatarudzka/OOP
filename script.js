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
    init() {
        this.square = new Square(20, 'red')
        this.square.render()
        this.square.element.style.position = 'absolute'

        this.render()
        this.startListeningToControls()
        this.append()
        this.startGameTick()
    }


    move(deltaX, deltaY) {
        this.position = {
            x: this.position.x + deltaX,
            y: this.position.y + deltaY

        }
    }

    startGameTick() {
        setInterval(
            () => {
                (event) => {
                    if (LastKeyDown === 'ArrowRight') {
                        this.move(10, 0)
                    }
                    if (LastKeyDown === 'ArrowLeft') {
                        this.move(-10, 0)
                    }
                    if (LastKeyDown === 'ArrowUp') {
                        this.move(0, -10)
                    }
                    if (LastKeyDown === 'ArrowDown') {
                        this.move(0, 10)
                    }
                },
                250
            }
        )
    }

    startListeningToControls() {
        window.addEventListener(
            'keydown',
            (event) => {
                this.LastKeyDown = event.key

            }


        )
    }
    render() {
        this.square.element.style.position = 'absolute'
        this.square.element.style.left = this.position.x + 'px'
        this.square.element.style.top = this.position.y + 'px'
        return this
    }


    append(container = document.body) {
        container.appendChild(this.square.element)

        return this
    }

}


const game1 = new Game()
game1.append()
game1.render()
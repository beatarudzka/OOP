class Rectangle {
    constructor(a, b, backgroundColor) {
        this.a = a
        this.b = b
        this.backgroundColor = backgroundColor
        this.element = null
    }

    render()

    {
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


const square1 = new Square(100, 'green')

const rectangle1 = new Rectangle(100, 50, 'red')

rectangle1
    .render()
    .append()

square1
    .render()
    .append()
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
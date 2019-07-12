function Rectangle(a, b, backgroundColor) {
    this.a = a
    this.b = b
    this.backgroundColor = backgroundColor
    this.element = null
}

Rectangle.prototype.render = function() {
    this.element = document.createElement('div')

    this.element.style.width = this.a + 'px'
    this.element.style.height = this.b + 'px'
    this.element.style.backgroundColor = this.backgroundColor

    return this
}

Rectangle.prototype.append = function(container = document.body) {
    this.element && container.appendChild(this.element)

    return this
}

const rectangle1 = new Rectangle(100, 50, 'red')
const rectangle2 = new Rectangle(50, 100, 'green')

rectangle1
    .render()
    .append()
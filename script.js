function Button(text) {
    this.label = text
    this.element = null
}

Button.prototype.init = function() {
    this.element = document.createElement('button')
    this.element.innerText = this.label
    document.body.appendChild(this.element)
    this.element.addEventListener(
        'click',
        function
    )

}
Button.prototype.setLabel = function(newLabel) {
    this.label = newLabel
    if (this.element) {
        this.element.innerText = this.label
    }
}

const btn1 = new Button('Click me', () => alert('Clicked'))
btn1.init()
function Counter() {
    this.number = 0
    this.label = '+'
    this.render()
}

Counter.prototype.render = function() {
    document.body.innerText = ''
    const h1 = document.createElement('h1')
    h1.innerText = this.number
    document.body.appendChild(h1)
    const button = new Button('+', this.inc.bind.this)
    button.init()
}

Counter.prototype.inc = function() {
    this.number = this.number + 1
    this.label = label
    this.render()
}
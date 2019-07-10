function Button(text) { //
    this.label = text

    this.init = function() {
        const button = document.createElement('button')
        button.innerText = this.label
        document.body.appendChild(button)
    }
    this.init
}

const btn1 = new Button('Click me')
const btn2 = new Button('Click')
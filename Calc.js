function CustomInput(value = '', onChange) {
    this.value = value
    this.onChange = onChange
    this.element = null
}

CustomInput.prototype.render = function() {
    this.element = this.element || document.createElement('input')

    this.element.value = this.value

    this.element.addEventListener(
        'input',
        this.onChange
    )

    return this.element
}

function Calc() {
    this.number1 = 10
    this.number2 = 11
    this.element = null
}

Calc.prototype.number1Changed = function(event) {
    console.log(event.target.value)
}

Calc.prototype.render = function() {
    this.element = this.element || document.createElement('div')

    this.element.innerText = ''

    const result = this.number1 + this.number2

    const input1El = (new CustomInput(this.number1, this.number1Changed)).render()
    const input2El = (new CustomInput(this.number2)).render()
    const input3El = (new CustomInput(result)).render()

    const plus = document.createTextNode('+')

    this.element.appendChild(input1El)
    this.element.appendChild(plus)
    this.element.appendChild(input2El)
    this.element.appendChild(input3El)

    return this.element
}
function Button(label, onClick) {
    this.label = label
    this.onClick = onClick
    this.element = null
}

Button.prototype.init = function() {
    this.element = document.createElement('button')

    this.element.innerText = this.label

    this.element.addEventListener(
        'click',
        this.onClick
    )

    document.body.appendChild(this.element)
}

Button.prototype.setLabel = function(newLabel) {
    this.label = newLabel

    if (this.element) {
        this.element.innerText = this.label
    }
}

Button.prototype.setOnClick = function(newOnClick) {
    const oldOnClick = this.onClick
    this.onClick = newOnClick

    if (this.element) {
        this.element.addEventListener(
            'click',
            this.onClick
        )
        this.element.removeEventListener(
            'click',
            oldOnClick
        )
    }
}
const Counter = (function() {

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

    function Counter() {
        this.number = 0

        this.render()
    }

    Counter.prototype.render = function() {
        document.body.innerText = ''

        const h1 = document.createElement('h1')
        h1.innerText = this.number
        document.body.appendChild(h1)

        const button = new Button('+', this.inc.bind(this))
        button.init()
    }

    Counter.prototype.inc = function() {
        this.number = this.number + 1

        this.render()
    }

    return Counter

})()
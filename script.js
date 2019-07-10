///new tworzy nowy obiekt na podstawie funkcji specjalnego rodzaju (ma specjalny proto), przypisuje nowy proto, wywoluje funkcje w konteście nowego obiektu
//
function Button() {
    this.label = 'Click'
}

const btn1 = new Button()
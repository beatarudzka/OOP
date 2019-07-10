///new tworzy nowy obiekt na podstawie funkcji specjalnego rodzaju (ma specjalny proto), przypisuje nowy proto, wywoluje funkcje w konteście nowego obiektu, zwraca nowy obiekt
//
function Button(text) {
    this.label = text
}

const btn1 = new Button('Click me')
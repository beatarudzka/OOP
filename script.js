//dziedzieczenie prototypowe
// dziedziczenie klasowe
// this zawsze wskazuje na obiekt i na kontekt wywołany czyli na miejsce w którym zostala wywołana funkcja
// jesli bedziemy uzywac modułów - wewnątrz modułow this wskazuje na indefiend
// this nie można go nadpisać - silnik decyduje na co wskauje ten wskażnik
//


function sayHello() {
    console.log('Hello' + this.name)
}

const me = {
    name: "Kundzia"
}

// this wskazuje na to co stoi przed kropką
// to się tyczy tylko do zwykłych funkcji
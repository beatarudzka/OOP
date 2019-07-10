//funkcja strzałkowa zapamietuje this na miejsca deklaracji a deklaracja może być w innej funkcji
// 

const sayHello = () => {
    console.log('Hello' + this.name)
}
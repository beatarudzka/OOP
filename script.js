const cat1 = {
    name: 'Fluffy'
}

const cat2 = {
    sound: "Miauuuu"
}

const cat3 = {
    legs: 3,
    sound: "Bark"
}

const cat4 = {
    ...cat1,
    ...cat2,
    ...cat3
}
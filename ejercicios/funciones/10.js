//Declaracion normal
function velocidad (distancia, tiempo){
    return distancia / tiempo;
}

//Declaracion con arrow function
const calculovelocidad = (distancia, tiempo) => {
    return distancia / tiempo;
}

let d = 100; //Km
let t = 2; //Horas
console.log(velocidad(d,t))
console.log(calculovelocidad(d,t))
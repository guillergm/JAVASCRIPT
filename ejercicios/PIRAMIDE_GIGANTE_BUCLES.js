//funcion para crear filas con "k" asteriscos
function fila(k) { // k es el numero de asteriscos que se van a imprimir
    let n = 0;// contador
    let linea = " ";//fila de asteriscos
    while (n < k) {
      linea = linea + "*";
      n++;
    }
    console.log(linea);
  }
  function piramide(k) {
    let n = 0;
    while (n < k) {
      n++;
      fila(n);
    }
  }
  function piramideInvertida(k) {
    while (k > 0) {
      fila(k);
      k--;
    }
  }
  n=0;
  while(n<25){
    n++;
    piramide(n);
  }
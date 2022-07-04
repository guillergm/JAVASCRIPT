function fizzbuzz(n){

    if(n%15===0){
      return 'fizzbuzz';
    }
  
    if(n%3===0){
      return 'fizz';
    }
    if(n%5===0){
      return 'buzz';
    }

    return n;

}

function main(n){
    for (let i=0; i<=n; i++){
        console.log(fizzbuzz(i));
    }
}

main(100);

module.exports = fizzbuzz
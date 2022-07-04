function fizzbuzz(n){

    //if the number is multiple of 3 and 5

    if(n%15===0){
      return 'fizzbuzz';
    }

    //if the number is multiple of 3
  
    if(n%3===0){
      return 'fizz';
    }

    //if the number is multiple of 5

    if(n%5===0){
      return 'buzz';
    }

}

let r = fizzbuzz(15);
console.log(r);

module.exports = fizzbuzz
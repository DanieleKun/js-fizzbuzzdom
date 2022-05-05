// Scrivi un programma che stampi in console i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Stampa i numeri da 1 a 100
 for (let i = 1; i <= 100; i++) {
     // console.log(i);
    let myCard;

     if (i % 3 === 0 && i % 5 !== 0) {
         myCard = 'fizz';
     } else if (i % 5 === 0 && i % 3 !== 0) {
         myCard = 'buzz';
     } else if (i % 3 === 0 && i % 5 === 0) {
         myCard = 'fizzbuzz';
     } else {
         myCard = i
     }

     console.log(myCard);
 }


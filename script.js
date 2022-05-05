// Scrivi un programma che stampi in console i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


const myList = document.querySelector(".list")


// Stampa i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    let myCard;
    //  Modifica i multipli di 3 e 5
    if (i % 3 === 0 && i % 5 !== 0) {
        myCard = `<li class="card bg_fizz">fizz</li>`; 
    } else if (i % 5 === 0 && i % 3 !== 0) {
        myCard = `<li class="card bg_buzz">buzz</li>`;
    } else if (i % 3 === 0 && i % 5 === 0) {
        myCard = `<li class="card bg_fizzbuzz">fizzbuzz</li>`;
    } else {
        myCard = `<li class="card bg_number">${i}</li>`;
    }
    // console.log(myCard);

    
    myList.innerHTML += myCard;
    
}



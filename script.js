let isHotOutside = true; 
let isWeekday = true; 
let hasMoneyInPocket = true; 

let costOfMilk = 1.99; 
let moneyInWallet = 5; 
let thristLevel = 5; 

let shouldBuyIceCream = isHotOutside && hasMoneyInPocket; 
console.log("Should I buy ice cream? " + shouldBuyIceCream);

let willGoSwimming = isHotOutside && !isWeekday; 
console.log("Should I go swimming? " + willGoSwimming); 

let isAGoodDay = isHotOutside && moneyInWallet && !isWeekday; 
console.log("Is it a good day? " +isAGoodDay)

let willBuyMilk = (isHotOutside && thristLevel >= 3) && 
    (moneyInWallet >= costOfMilk*2); 
console.log("Can I buy milk? "+ willBuyMilk); 

//LOOPS
console.log("LOOPS"); 

console.log("6A");
let i = 0; 
while (i < 101 ) {
   console.log(i); 
   i+=2; 
}

console.log("6B"); 
let a = 100; 
while (a >= 0) {
    console.log(a); 
    a-=3; 
}

console.log("6C"); 
for (let i = 1; i <= 100; i+=2) {
    console.log(i); 
}

console.log("6D"); 
for (let i = 0; i<=100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("HelloWorld");
    } else if (i % 5 == 0) {
        console.log("World");
    } else if (i % 3 == 0) {
        console.log("Hello");
    } else {
        console.log(i); 
    }
}


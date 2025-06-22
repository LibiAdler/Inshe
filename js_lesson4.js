//all comments below - note to self
//Example of function use - below the "console.log" block.

function randomGen(start, end, steps) { //declaring function and passing in desirable parameters to make the function more flexible.
    let odds = 0; //variable to count odds
    let evens = 0; // variable to count evens
    //here can add array value to store generated numbers and print them out later,
    //but didn't want to go that far yet, because don't know how to store them after each "for".
    for (let i = 0; i < steps; i++) { 
        //next line uses Math.random() to generate value between 0 and 1 (exclusive),
        //then scales it to the range between start and end (inclusive),
        //then rounds it down to the nearest integer.
        //then adds number that equals to "start" to the result to shift the number to proper range.
        let number = Math.floor(Math.random() * (end - start + 1)) + start;
        //next "if-else" checks if the number is even or odd
        if (number % 2 === 0) {
            evens++; // if number is even, increase evens counter and stores new value back to evens.
        } else {
            odds++;  // if number is odd, increase odds counter and stores new value back to odds.
        }
    }
    let oddsPercent = (odds / steps) * 100; //calculating percentage of odds
    let evensPercent = (evens / steps) * 100; //calculating percentage of evens
    
    //printing all results to the console
    console.log("Odds count: " + odds);
    console.log("Evens count: " + evens);
    console.log("Numbers generated: " + steps);
    console.log("Odds percentage: " + oddsPercent.toFixed(2) + "%"); 
    console.log("Evens percentage: " + evensPercent.toFixed(2) + "%")
    // Optional here: Print the generated numbers if array was declared above 
}

randomGen(100, 1000, 20); //accepts three arguments: start, end, and steps.


//-----------------------------------------------------------------------------

// Example of generating a random number between 0 and 100 from lesson:

// var randomNumber = Math.random();
// randomNumber *= 100; // Scale to 0-100 
// console.log (randomNumber); // Log the random number
// randomNumber = Math.floor(randomNumber); // Round down to nearest integer
// console.log(randomNumber); // Log the rounded number
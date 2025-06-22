//Example of function use - below the "console.log" block.

function randomGen(start, end, steps) { 
    let odds = 0;
    let evens = 0; 
    //here can add another value (array?) to store generated numbers and print them out later.
    for (let i = 0; i < steps; i++) { 
        let number = Math.floor(Math.random() * (end - start + 1)) + start;
        if (number % 2 === 0) {
            evens++; 
        } else {
            odds++;  
        }
    }
    let oddsPercent = (odds / steps) * 100; 
    let evensPercent = (evens / steps) * 100; 

    //printing all results to the console
    console.log("Odds count: " + odds);
    console.log("Evens count: " + evens);
    console.log("Numbers generated: " + steps);
    console.log("Odds percentage: " + oddsPercent.toFixed(2) + "%"); 
    console.log("Evens percentage: " + evensPercent.toFixed(2) + "%")
}

randomGen(100, 1000, 20); 
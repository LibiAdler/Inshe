const services = {
    cut: "10$",
    color: "20$",
    style: "15$",
    shampoo: "5$",
    conditioner: "7$",
    getMinPrice: function () {
    let minService = "";
    let minPrice = 9999999; // Start with a big number (any possible way to make it more dynamic?)
    for (let key in this) {
            let price = parseFloat(this[key]);
            if (price < minPrice) {
                minPrice = price;
                minService = key;
            }
    }
    console.log("Cheapest service is: " + minService + " (" + minPrice + "$)");
}, 
    getMaxPrice: function () {
        let maxService = "";
        let maxPrice = 0;
        for (let key in this) {
                let price = parseFloat(this[key]);
                if (price > maxPrice) {
                    maxPrice = price;
                    maxService = key;
                }
        }
        console.log("Most expensive service is: " + maxService + " (" + maxPrice + "$)");
    },
    countAll: function () {
        let total = 0;
        for (let key in this) {
            if (!isNaN(parseFloat(this[key]))) { // Only add if it's an actual number
            total = total + parseFloat(this[key]);
        }
        }
        console.log("Total cost of all services: " + total + "$");
    }
}

services["spa"] = "30$"; // Adding a new service
services["massage"] = "50$"; // Adding another new service
services["brush"] = "12$"; // Aaaaand another one
services["scream of frustration"] = "0$"; // Existential crisis check lol

services.getMinPrice(); // Call the method to find the cheapest service
services.getMaxPrice(); // Call the method to find the most expensive service
services.countAll(); // Call the method to count the total cost of all services
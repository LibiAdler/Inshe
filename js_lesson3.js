//Note to self:
// The loop starts with i = 0.
// It checks if i is less than y (the number I give as the second argument).
// If yes, it multiplies z by x and stores the result back in z.
// It increases i by 1.
// Steps 2–4 repeat until i is no longer less than y.
// When the loop finishes, z holds the value of x multiplied by itself y times (x to the power of y).

function pow(x,y) {
  let z = 1;
    for (let i = 0; i < y; i++) {
        z = z*x;
    }
    return z;
}
console.log(pow(2,3));

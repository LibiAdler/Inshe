const text = "Wonderful Joyful Happiness Time Task Apple";
const regex = /\b[^Aa\s]{6,}\b/g;
const matches = text.match(regex);
console.log(matches); 
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // not valid because "mail.ru" is not a valid domain
    },
];

function isAllowedDomain(email) {
    // Only latin letters, dots, underscores before @, and only gmail or yahoo domains
    var pattern = /^[a-zA-Z._-]+@(gmail|yahoo)\.com$/i;
    return pattern.test(email);
}

// Examples:
console.log(isAllowedDomain("test.test@gmail.com")); // true
console.log(isAllowedDomain("test_test@yahoo.com")); // true
console.log(isAllowedDomain("test-test@gmail.com")); // true (dash allowed)
console.log(isAllowedDomain("test!test@gmail.com")); // false (exclamation not allowed)
console.log(isAllowedDomain("test@mail.ru")); // false - illegal domain
console.log(isAllowedDomain("тест@gmail.com")); // false - illegal characters
console.log(isAllowedDomain("טסט@mail.ru")); // false - illegal characters AND domain
console.log(isAllowedDomain("test@gmail.co")); // false - illegal domain
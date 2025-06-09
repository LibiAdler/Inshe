console.log("'number' + 3 + 3 =", 'number' + 3 + 3); // = number33 - Concatenation of string and numbers
console.log("null + 3 =", null + 3); // = 3 - Null is treated as 0 in arithmetic operations, so result is 3
console.log("5 && 'qwerty' =", 5 && "qwerty"); // = qwerty - Logical operator AND returns the second value if the first is true
console.log("+'40' + +'2' + 'hillel' =", +'40' + +'2' + "hillel"); // 42hillel - Unary plus converts strings to numbers, then concatenates with string 'hillel'
console.log("'10' - 5 === 6 =", '10' - 5 === 6);    // = false - Subtracting strings converts them to numbers, then compares the result to 6
console.log("true + false =", true + false);        //= 1 - Comparison of boolean values (they turn into numbers in this case): true is 1, false is 0, so result is 1
console.log("'4px' - 3 =", '4px' - 3);  // = NaN - Subtracting a string converts it to NaN, so result is NaN, because NaN cannot be a part of mathematical operation
console.log("'4' - 3 =", '4' - 3);  // = 1 - Subtracting with a string in equasion: string is converted to a number so result is 1
console.log("'6' + 3 ** 0 =", '6' + 3 ** 0);   // = 61 - 3 to the power of 0 is always 1, then it concatenates with string '6'
console.log("12 / '6' =", 12 / '6');    // = 2 - Dividing a number by a string that can be converted to a number
console.log("'10' + (5 === 6) =", '10' + (5 === 6));    // = 10false - Concatenates '10' with the boolean result of (5 === 6), which is false
console.log("null == '' =", null == '');    // = false - Comparing null with an empty string, and this will return false, becasue null can be equal to undefined or itself, but not to an empty string
console.log("3 ** (9 / 3) =", 3 ** (9 / 3));    // = 27 - Exponentiation: 3 raised to the power of (9 / 3), which is 3 ** 3 = 27
console.log("!!'false' == !!'true' =", !!'false' == !!'true');  // = true - Double negation converts strings to booleans, both are true, so comparison is true
console.log("0 || '0' && 1 =", 0 || '0' && 1);  // = 1 - Evaluation of '0' && 1 - '0' is true, because it is a non-empty string, so the result is 1, then 0 || 1 evaluates to 1 (OR operator returns the first truthy value, which is here 1, because 0 means false)
console.log("(+null == false) < 1 =", (+null == false) < 1);    // = false - +null converts it to a number, which is 0, false is also 0, so comparison is 0 < 1, which is true
console.log("false && true || true =", false && true || true);  // = true - Logical AND and OR, first part evaluates to false, but second evaluates to true, so result is true.
console.log("false && (false || true) =", false && (false || true));    // = false - Logical AND and OR: in paretheses evaluates to true, but false && true is false, so result is false.
console.log("(+null == false) < 1 ** 5 =", (+null == false) < 1 ** 5);  // = false - +null converts it to a number 0, false is also 0 (the equasion in paretheses is true this way), 1 to the power of 5 is still 1, so comparison is 1(true) < 1, which is false
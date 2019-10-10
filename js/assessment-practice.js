"use strict";

function isTrue(x){
    return x === true;
}
console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(null));
console.log(isTrue("true"));
console.log(isTrue("Banana"));
console.log(isTrue([1, 2]));

function isFalse(x){
    return x === false;
}

console.log(isFalse(false));             // true
console.log(isFalse(true));              // false
console.log(isFalse(0));                 // false
console.log(isFalse(null));              // false
console.log(isFalse(""));                // false
console.log(isFalse("Banana"));          // false
console.log(isFalse([1, 2]));            // false

function not(x) {
    return !x;
}

console.log(not(false));                  // true
console.log(not(0));                      // true
console.log(not(""));                     // true
console.log(not(null));                   // true
console.log(not(NaN));                    // true
console.log(not(undefined));              // true
console.log(not(true));                   // false
console.log(not("something"));            // false
console.log(not(Infinity));               // false
console.log(not(123));                    // false

function addOne(x){
    return parseFloat(x) + 1;

}

console.log(addOne(0));                    // 1
console.log(addOne(2));                    // 3
console.log(addOne(-5));                   // -4
console.log(addOne(5.789));                // 6.789
console.log(addOne(Infinity));             // Infinity
console.log(addOne("2"));                  // 3
console.log(addOne("0"));                  // 1
console.log(addOne("banana"));             // NaN
console.log(addOne(true));                 // NaN
console.log(addOne(NaN));                  // NaN

function isEven(x){
    var x = parseFloat(x);
    return (x % 2 === 0);
}

console.log(isEven(2));                   // true
console.log(isEven(-8));                  // true
console.log(isEven(0));                   // true
console.log(isEven("42"));                // true
console.log(isEven(1));                   // false
console.log(isEven("-3"));                // false
console.log(isEven(false));               // false
console.log(isEven("banana"));            // false


function isIdentical(x,y){
    return (x === y);
}

console.log(isIdentical(3, 3));                     // true
console.log(isIdentical(false, false));             // true
console.log(isIdentical("hello", "hello"));         // true
console.log(isIdentical(3, 3.0));                   // true
console.log(isIdentical(undefined, undefined));     // true
console.log(isIdentical(2, "2"));                   // false
console.log(isIdentical("javascript", "java"));     // false


function isEqual(x, y){
    return (x == y);
}

console.log(isEqual(3, "3"));                       // true
console.log(isEqual("abc123", "abc123"));           // true
console.log(isEqual(true, 1));                      // true
console.log(isEqual(0, false));                     // true
console.log(isEqual(4, -5));                        // false
console.log(isEqual("java", "javascript"));         // false


function or(x, y){
    return (x || y);
}

console.log(or(true, true));                    // true
console.log(or(true, false));                   // true
console.log(or(false, true));                   // true
console.log(or(false, false));                  // false
console.log(or("hello", "world"));              // "hello" (this behavior is non-obvious, research more!)


function and(x, y){
    return (x && y);
}

console.log(and(true, true));                    // true
console.log(and(true, false));                   // false
console.log(and(false, true));                   // false
console.log(and(false, false));                  // false
console.log(and("hello", "world"));              // "world" (this behavior is non-obvious, research more!)

function concat(x, y){
    return ("" + x + y);
}

console.log(concat("code", "up"));                // "codeup"
console.log(concat("connect", 4));                // "connect4"
console.log(concat("hello", "world"));            // "helloworld"
console.log(concat(4, 2));                        // "42"
console.log(concat(true, true));                  // "truetrue"
# empty-checker 
Npm package to check the value is worth.

if the value is: 
```
null, undefined, 0, ''. 
```
then the return is ```true``` and vice versa

## How To Use

``` npm i empty-checker --save ```

```javascript
// Import the function
const isEmpty = require('./index')

// Examples with number
console.log(`Check Value 1 result is ${isEmpty(1)}`);
console.log(`Check Value 0 result is ${isEmpty(0)}`);

// Example with string
console.log(`Check Value "hacktoberfest" result is ${isEmpty("hacktoberfest")}`);
console.log(`Check Value "" result is ${isEmpty("")}`);

// Example with array
console.log(`Check Value [1,2,3,4,5] result is ${isEmpty([1,2,3,4,5])}`);
console.log(`Check Value [] result is ${isEmpty([])}`);

// Example with object
console.log(`Check Value {name: "Udin"} result is ${isEmpty({name: "Udin"})}`);
console.log(`Check Value {} result is ${isEmpty({})}`);
```

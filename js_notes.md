# Javascript notes

## Scope

## Implicit Coercion/Typecasting

```js
var x = 4;
var y = "5";
console.log(x + y); //"45"
console.log(x - y); //-1
```

- Let's see the same example using Char

```js
var x = 4;
var y = "c";
console.log(x + y); //'4c
console.log(x - y); //NaN
```

- anything calculated with NaN is NaN

## Explicit Coercion/Typecasting

```js
var x = 4;
var y = "5";
console.log(x + parseInt(y)); //9
console.log(x - y); //-1
```

## Strict equalto(`===`)

```js
var x = 5;
var y = "5";
console.log(x == y); // true
console.log(x === y); //false
```

 `===` is much faster compared to `==` because there's only one step is performed whereas in `==` Typecasting/Coersion is performed.

## Functions

> Points to be noted

- DRY
  - D - don't
  - R - Repeat
  - Y - Yourself

> 5 pillars of code quality

1. Readability
2. Maintainability - Code Debt
3. Extensibility / Scalable
4. Testability
5. Performance

Function Declaration / Definition  
n = parameter  
function body()  
without return prints "undefined"  
function call  
argument = 10
```js
function double(n) {
  return n + 2;
}

console.log(double(10));

// 2 ways to exit function
function triple(n) {
  console.log("Hi");

  if (n > 2) {
    return 35;
  }

  console.log("Hi");
  console.log("Hi");
  console.log("Hi");
  console.log("Hi");
}
console.log(triple(10));
console.log(triple(1));
```

## Arrow Functions
~~~js
const sum = (x, y) => {
  return x + y;
};
console.log(sum(3, 2));

// Single line
const mul = (x, y) => x * y;
console.log(mul(4, 2));
~~~

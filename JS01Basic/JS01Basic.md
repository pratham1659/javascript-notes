# JavaScript Interview Highlights

## Topic 1: var vs let vs const

### 🔄 var vs let vs const

- ✅ 1. Scope Example

  ```js
  function testVar() {
    if (true) {
      var x = 5; // function scoped
    }
    console.log(x); // ✅ 5
  }

  function testLet() {
    if (true) {
      let y = 10; // block scoped
    }
    console.log(y); // ❌ ReferenceError
  }
  ```

- ✅ 2. Hoisting Behavior

  ```js
  console.log(a); // ✅ undefined (hoisted)
  var a = 10;

  console.log(b); // ❌ ReferenceError
  let b = 20;
  ```

- ✅ 3. Re-declaration

  ```js
  var a = 1;
  var a = 2; // ✅ Allowed

  let b = 3;
  // let b = 4; ❌ Error: Identifier 'b' has already been declared
  ```

- ✅ 4. Re-assignment

  ```js
  let name = "Anlie";
  name = "Mary"; // ✅ Allowed

  const country = "India";
  // country = "USA"; ❌ TypeError: Assignment to constant variable.
  ```

- Note: const prevents re-assignment, but not mutation in objects or arrays:

  ```js
  const user = { name: "Anlie" };
  user.name = "Mary"; // ✅ Allowed

  const arr = [1, 2];
  arr.push(3); // ✅ Allowed
  ```

- 🧠 Best Practices

  - ✅ Use let when value might change.
  - ✅ Use const when value won’t change.
  - ❌ Avoid var — it's outdated and can cause weird bugs due to hoisting and scope issues.

## 📚 JavaScript: `var` vs `let` vs `const`

| Feature            | `var`                               | `let`                                 | `const`                               |
| ------------------ | ----------------------------------- | ------------------------------------- | ------------------------------------- |
| Scope              | Function scoped                     | Block scoped `{}`                     | Block scoped `{}`                     |
| Hoisting           | ✅ Yes (initialized as `undefined`) | ✅ Yes (but not initialized — in TDZ) | ✅ Yes (but not initialized — in TDZ) |
| Re-declaration     | ✅ Allowed                          | ❌ Not allowed in same scope          | ❌ Not allowed                        |
| Re-assignment      | ✅ Allowed                          | ✅ Allowed                            | ❌ Not allowed                        |
| Temporal Dead Zone | ❌ No                               | ✅ Yes                                | ✅ Yes                                |
| Use Case           | Old JS (not recommended)            | When value can change                 | When value should not change          |

> ✅ **Best Practice:** Use `let` for variables that change, and `const` for constants. Avoid `var` in modern JavaScript.

---

## 🔁 Hoisting in JavaScript

**Hoisting** is JavaScript's default behavior of **moving declarations to the top** of their scope before code execution.

### ⚠️ Key Points:

- Only **declarations** are hoisted, **not initializations**.
- `var` is hoisted and initialized to `undefined`.
- `let` and `const` are hoisted but remain **uninitialized** in the **Temporal Dead Zone (TDZ)**.
- 🧠 `Temporal Dead Zone (TDZ)`
  The TDZ is the time between entering scope and the actual variable declaration.
  Accessing a let or const variable during the TDZ throws a ReferenceError.

---

### 🧪 Examples:

```js
// ✅ var is hoisted and initialized
console.log(a); // undefined
var a = 10;

// ❌ let is hoisted but not initialized
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

// ❌ const behaves the same as let
console.log(c); // ReferenceError
const c = 30;
```

### Global Scopes

- Variables declared outside any function or block.
- Accessible anywhere in the script.

  ```js
  var name = "Anlie"; // Global scope
  function greet() {
    console.log(name); // Accessible here
  }
  ```

- Function Scope

  - Variables declared inside a function using var, let, or const.
  - Accessible only within that function.

    ```js
    function sayHello() {
      let message = "Hello!";
      console.log(message);
    }
    // console.log(message); // ❌ Error: message is not defined
    ```

- Block Scope (Introduced in ES6)

  - Variables declared inside a block {} using let or const.
  - var is not block-scoped, only let and const are.

    ```js
    if (true) {
      let x = 10;
      const y = 20;
    }
    // console.log(x); // ❌ Error: x is not defined
    ```

- What is Shadowing?

  - Shadowing happens when a variable declared within a certain scope (like inside a function or block) has the same name as a variable declared in an outer scope.
    In this case, the inner variable “shadows” or overrides the outer one within its scope.

    ```js
    let name = "Anlie"; // Global scope
    function greet() {
      let name = "Mary"; // Shadows the global 'name'
      console.log(name); // 👉 Outputs: Mary
    }
    greet();
    console.log(name); // 👉 Outputs: Anlie
    ```

- Important Notes:

  - ✅ Works with function and block scopes:

    ```js
    let x = 10;

    if (true) {
      let x = 20; // Shadows the outer x
      console.log(x); // 👉 20
    }

    console.log(x); // 👉 10
    ```

- ❌ Be careful with var:

- var doesn't have block scope, so shadowing can behave unexpectedly.

  ```js
  var a = 5;

  function test() {
    var a = 10; // Shadows global 'a' inside function
    console.log(a); // 👉 10
  }

  test();
  console.log(a); // 👉 5
  ```

- 🚫 Illegal Shadowing

- Shadowing becomes illegal when trying to shadow a variable declared with let/const using var in the same or inner block.

  ```js
  let z = 100;

  {
    var z = 200; // ❌ SyntaxError: Identifier 'z' has already been declared
  }
  ```

  ```js
  var z = 100;

  {
    let z = 200; // ✅ Allowed: block-scoped shadowing
    console.log(z); // 👉 200
  }
  console.log(z); // 👉 100
  ```

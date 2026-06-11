# Defensive Programming with JavaScript

## Description

This exercise demonstrates the concept of **defensive programming** in JavaScript. The `letterFinder()` function validates its inputs before executing its main logic, ensuring that unexpected or invalid arguments do not cause runtime errors.

## Requirements

The function checks that:

* `word` is a string with a minimum length of 2.
* `match` is a string with a length of exactly 1.

If the inputs meet these conditions, the function searches for occurrences of the specified character within the word and logs the results.

If the inputs are invalid, the function displays an error message:

```text
Please pass correct arguments to the function.
```

## Example Usage

### Valid Input

```javascript
letterFinder("cat", "c");
```

Output:

```text
Found the c at 0
---No match found at 1
---No match found at 2
```

### Invalid Input

```javascript
letterFinder(1, 2);
```

Output:

```text
Please pass correct arguments to the function.
```

## Learning Objectives

* Understand defensive programming principles.
* Validate function arguments before use.
* Prevent runtime errors caused by invalid inputs.
* Use conditional statements to control program flow.

## Technologies Used

* JavaScript (ES6+)

## Author 
Soromtochukwu Ugwu
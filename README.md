# functs - merging functions
## Introduction
`functs` is a lightweight is a npm module for merging multiple functions into one.
You can use this e.g. for callbacks, event-handlers,...
### Example - Demo
```
const functs = require('functs');

//create some functions
function f1(first){
  console.log('Welcome', first);
}
function f2(first, second){
  console.log('world', second);
}

//merge them into one function
const a = functs(f1, f2);

//run it
a('in the', 'of internet!'); //=> 'Welcome in the world of internet!'
```
## Getting Started
### Installation
```npm install functs```
### Browser Version
Since functs is using ES6 you may not use it in the Browser because of compatibility.
I have added a version with better compatibility to the module.
Just copy the file `functs/functs-browser.js` from the `node_modules` to your public directory.
### Example - Create
```
const functs = require('functs');
const a = functs();
```
### Example - Add
```
//you can add functions to a functs object by passing them to the creator
const b = functs(()=>{
  return 'function 1';
}, ()=>{
  return 'function 2';
});

//the other way to add functions is the .add method
b.add(()=>{
  return function 3;
});
```
### Example - Remove
```
//to remove a function you need to pass the function itself to the .remove method
const key = b.add(()=>{
  return function 4;
});
b.remove(key);
```
### Example - Execute
```
//since the functs-object is a function the execution is simple: just run it.
b();
```
## functs()
### Arguments
`functions` to be included.
### Returns
A new `functs-object` that includes all `functions` given as arguments.
## methods
The `functs-object` is a `function` (with some extra methods) so you can use methods like `.apply()` or `.call()`. The `this`-argument of the `functs-object` will be applied on all included `functions`.
### .add()
With `.add()` you can add `functions` to a `Functs-object`.
#### Arguments
One or more `functions`
**or**
an `Array` of `functions`.
#### Returns
An `Array` of the given arguments.
#### Usage
```
const functs = require('functs');

//create a new functs-object
var a = functs();

//add functions
a.add(()=>{
  console.log('hi');
}, ()=>{
  console.log('foo');
});

//run the added functions
a();
```
### .remove()
With `.remove` you can remove `functions` from a `functs-object`.
#### Arguments
One or more `functions`
**or**
an `Array` of `functions` 
(Tip: You can use the `Array` that `.add()` returns).

The included `functions` will be removed.
#### Returns
`ùndefined`

## abort()
All `functions` in a `functs-object` can recieve this method as last argument. 
It gets appended to the arguments given when executing the `functs-object`.
### Arguments
none
### Returns
`undefined`
### Example - Error Handling
```
const functs = require('functs');

//create a new functs-object
var a = functs(errorHandler, doSomething);

function errorHandler(error, result, abort) {
  if(error) {
    console.log('error:', error);
    
    //do not continue if an error occurs
    abort();
  }
}
function doSomething(error, result) {
  //this only gets executed when the errorHandler does not call abort
  console.log('Yayy! Got some result:', result);
}

//run the functions in the Functs-object

a(null, 'nice result');
//this will log: 'Yayy! Got some result: nice result'

a('extremely critical error');
//this will log: 'error: extremely critical error'
```

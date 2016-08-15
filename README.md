# functs - merging functions
## Introduction
`functs` is a is a lightweight is a npm module for merging multiple functions into one.
You can use this e.g. for callbacks, event-handlers,...
## Getting Started
### Installation
```npm install functs```
### Browser Version
Since functs is using ES6 you may not use it in the Browser because of compatibility.
I have added a version with better compatibility to the module.
Just copy the file `functs/functs-browser.js` from the `node_modules` to your public directory.
### Example - Error Handling
```
const functs = require('functs');

//create a new functs-object
var a = functs(errorHandler, doSomething);

function errorHandler(error, result, abort) {
  if(error) {
    console.log('error:', error);
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
## functs()
### Arguments
`functions` to be included.
### Returns
A new `functs-object` that includes all `functions` given as arguments.
## functs-Object
The `functs-object` is a `function` (with some extra methods) so you can use methods like `.apply()` or `.call()`.
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

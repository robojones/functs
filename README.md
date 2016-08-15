# functs
## Introduction
`functs` is a is a lightweight is a npm module for merging multiple functions into one.
You can use this e.g. for callbacks, event-handlers,...
## Getting Started
### Installation
```npm install functs```
### Example - Error Handling
```
const functs = require('functs');

//create a new Functs-object
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
## functs();
### Arguments
`functions` to be included.
### Returns
A new `Functs-Object` that includes all `functions` given as arguments.
## Functs-Object
The `Functs class` extends `function` so you can use methods like `.apply()` or `.call()`.
### .add()
With `.add()` you can add `functions` to a `Functs-object`.
#### Arguments
One or more `functions`.
#### Returns
An Array of the given Arguments.
#### Usage
```
const functs = require('functs');

//create a new Functs-object
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
With `.remove` you can remove `functions` from a Functs-object.
#### Arguments
An Array that includes one or more `functions`.
(Tip: You can use the Array that `.add()` returns.)
**or**
One single `function`.
The included `functions` will be removed.
#### Returns
`ùndefined`

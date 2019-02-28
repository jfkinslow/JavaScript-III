/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. globally through window binding
* 2. implicitly through a function called with a dot in front of it
* 3. by using a contructor to instantiate a new object
* 4. explicitly through the use of the call or apply methods
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding
let test = {
    id: 0,
    run: function(){
        console.log(this);
    }
}
test.run();

// Principle 3

// code example for New Binding

let constructorTest = function(name) {
    this.name = name
}
constructorTest.prototype.log = function(){
    console.log(this.name);
}
let newConstructorTest = new constructorTest("Joshua");
newConstructorTest.log();

// Principle 4

// code example for Explicit Binding


var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
  ];
  
  for (var i = 0; i < animals.length; i++) {
    (function(i) {
      this.print = function() {
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
      this.print();
    }).call(animals[i], i);
  }

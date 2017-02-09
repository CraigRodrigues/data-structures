var Stack = function() {
  var stack = Object.create(stackMethods);

  stack.storage = {};
  stack.length = 0;

  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.length++] = value;
  },
  pop: function() {
    if (this.length > 0) {
      var item = this.storage[--this.length];
      delete this.storage[this.length + 1];

      return item;
    }
  },
  size: function() {
    return this.length;
  }
};

// Stack.prototype.push = function(value) {
//   this.storage[this.length++] = value; 
// };

// Stack.prototype.pop = function() {
//   if (this.length > 0) {
//     var item = this.storage[--this.length];
//     delete this.storage[this.length + 1];

//     return item;
//   }
// };

// Stack.prototype.size = function() {
//   return this.length;
// };
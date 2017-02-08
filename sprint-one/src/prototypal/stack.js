var Stack = function() {
  var stack = Object.create(Stack.prototype);

  stack.storage = {};
  stack.length = 0;

  return stack;
};

var stackMethods = {};

Stack.prototype.push = function(value) {
  this.storage[this.length++] = value; 
};

Stack.prototype.pop = function() {
  if (this.length > 0) {
    var item = this.storage[--this.length];
    delete this.storage[this.length + 1];

    return item;
  }
};

Stack.prototype.size = function() {
  return this.length;
};



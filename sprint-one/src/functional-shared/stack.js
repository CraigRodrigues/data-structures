
var Stack = function() {
  var stack = {};

  stack.storage = {};
  stack.length = 0;
  _.extend(stack, stackMethods);
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



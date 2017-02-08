var Stack = function() {
  var stack = {};

  stack.storage = {};
  stack.length = 0;

  extend(stack, stackMethods);

  return stack;
};

var stackMethods = {
  push: function(value) {

  },
  pop: function() {

  },
  size: function() {
    return length;

  }
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


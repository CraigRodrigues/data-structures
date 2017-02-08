var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size++] = value;
  };

  someInstance.pop = function() {

    if (size > 0) {
      var item = storage[--size];
      delete storage[size + 1];
      return item;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

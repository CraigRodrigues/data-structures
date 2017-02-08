var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last++] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      var item = storage[first++];
      delete storage[first - 1];
      size--;

      return item;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

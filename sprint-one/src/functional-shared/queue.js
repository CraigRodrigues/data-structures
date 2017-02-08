var Queue = function() {
  var queue = {};
  queue.storage = {};
  queue.length = 0;
  queue.first = 0;
  queue.last = 0;
  extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.last++] = value;
    this.length++;
  },
  dequeue: function() {

  },
  size: function() {
    return this.length;
  }
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
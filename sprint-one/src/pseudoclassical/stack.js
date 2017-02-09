var Stack = function() {
  this.length = 0;
  this.storage = {};
};

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



var PrefixTree = function(value) {
  this.value = value || null;
  this.isWord = false;
  this.children = {};

};

PrefixTree.prototype.insert = function(word) {
  // loops over each char of word

  if (word.length > 0) {
  	var currentChild = this.children[word[0]];
    if (currentChild && currentChild.value === word[0]) {
      // dwhen we have found the word, change isWord to true
      if (word.length === 1) {
        this.children[word[0]].isWord = true;
      }
      currentChild.insert(word.slice(1));
    } else {
      var node = new PrefixTree(word[0]);
      this.children[word[0]] = node;
      if (word.length === 1) {
        this.children[word[0]].isWord = true;
      }
      node.insert(word.slice(1));
    }
  }
};

PrefixTree.prototype.contains = function() {

};

PrefixTree.prototype.remove = function() {

};
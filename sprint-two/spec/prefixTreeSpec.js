describe('prefixTree', function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });

  it('should be awesome', function() {
    expect(true).to.equal(true);
  });

  it('should have methods named "insert" and "contains", "remove" and property "isWord", "value", and "children"', function() {
    expect(prefixTree.insert).to.be.a('function');
    expect(prefixTree.contains).to.be.a('function');
    expect(prefixTree.remove).to.be.a('function');
    expect(prefixTree.hasOwnProperty('value')).to.equal(true);
    expect(prefixTree.hasOwnProperty('isWord')).to.equal(true);
    expect(prefixTree.hasOwnProperty('children')).to.equal(true);
  });

  it('should insert node into Prefix Tree', function() {
    prefixTree.insert('jon');
    expect(prefixTree.children['j']).to.be.a('object');
    // expect(prefixTree.contains('o')).to.equal(true);
  });

  it('should return true for last node of word', function() {
    prefixTree.insert('jon');
    expect(prefixTree.children['j'].children['o'].children['n'].isWord).to.equal(true);
    prefixTree.insert('jo');
    expect(prefixTree.children['j'].children['o'].isWord).to.equal(true);
  });
});

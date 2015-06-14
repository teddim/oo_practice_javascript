var ShoppingList = function(budget){
  this.contents = [];
  this.budget = 20;
};


ShoppingList.prototype.addItem = function(item) {
  if (this.budget - item.price <0 ) {
    return "sorry, you can't have that";
  }
  this.contents.push(item);
  this.budget = this.budget - item.price;
}

ShoppingList.prototype.total = function() {
  return this.contents.reduce(function(prev,curr) {
    return prev + curr.price;
  },0)
}

ShoppingList.prototype.swap = function(item1, item2) {
  this.contents[this.contents.indexOf(item1)] = item2;
}
module.exports = ShoppingList;

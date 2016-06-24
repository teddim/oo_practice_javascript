var ShoppingList = function(budget){
  this.budget = budget;
  this.contents = [];

}

ShoppingList.prototype.addItem = function(item){
  if(this.budget < item.price){
    return "sorry, you can't have that";
  }else{
    this.budget -= item.price;
    this.contents.push(item);
  }
};

ShoppingList.prototype.total = function(){
  return this.contents.reduce(function(prev,curr){
    return prev + curr.price;
  },0);
};

ShoppingList.prototype.swap = function(item1, item2){
  this.contents[this.contents.indexOf(item1)] = item2;
}

module.exports = ShoppingList;

var name = "the window";
var object = {
  name: "my object",
  getNameFunc: function() {
    // console.log(this);
    var that = this;
    return function() {
      //   console.log(this);
      return that.name + "__" + this.name;
    };
  }
};

var test = object.getNameFunc();

console.log(test());
console.log(this.name);

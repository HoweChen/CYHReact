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

var test3 = {
  a: "10",
  somefunc: function() {
    a = 11;
    console.log(this.a);
    console.log(a);
    let another = () => {
      let a = 12;
      console.log(a);
    };
    another();
  }
};

var test = object.getNameFunc();

console.log(test());
console.log(this.name);

var sth3 = test3.somefunc();

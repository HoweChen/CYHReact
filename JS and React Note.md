# Bind this

如果你的点击事件触发的方法里需要引用 this。就需要绑定啊。不然你的 this 是 null（记得如果没绑定 this 应该是全局 window。但这里 this 就是 null，撸完手上的需求去看一下 react 源码 ）所以 你要么在创建的时候绑定：

```javascript
<div className="save" onClick={this.handleClick.bind(this)}>
  Save
</div>
```

要么在一开始构造器里声明绑定
constructor(props){
super(props);
this.handleClick=this.handleClick.bind(this)
还有一种是利用闭包把作用域包起来

```javascript
<div className="save" onClick={() => this.handleClick}>
  Save
</div>
```

如果用第一种 会在每次点击时通过 bind 创建一个新的方法，所以一般用 2 3 两种情况，显示调用 bind() 只是为了保证 this 值。

#webpack-dev-server
在这个项目里我们用了 webpack，输出一个`bundle.js`，然而实际上如果我们后面用了`webpack-dev-server`我们会发现，你即使删除了这个`bundle.js`，这个网页/服务器依然可以正常运行，这是因为用了`webpack-dev-server`的时候，生成的`bundle.js`文件被保存在内存当中。

如果我们要重新生成 `bundle.js`的时候，就重新 `build`的一次就好了

# React-router

1.  `BrowswerRouter` 中的 `Route` 只能在同一个  `div` 下面，不能用两个 `div` 去存不同的 `Route`.
2.  `Route` 当中 `exact` 的使用，是为了防止  路由子网址的时候，父网址也会被匹配到的情况
3.  要让  客户端来路由而不是服务端路由，要在 webpack 里设置 `historyApiFallback: true`

# This in Javascript

```javascript
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
```

当 `this` 在 `object` 的第一级`function()` 中，`this` 指向的是这个函数的调用者，也就是这个 `object`，当这个 `function()` 中还有一个 `function()` 的时候，第二层的 `function()` 中的 `this` 指向的是 `global scope`

# 闭包

作者：朴灵链接：https://www.zhihu.com/question/27712980/answer/37768023
来源：知乎著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

关于闭包的概念，其实就是来自函数式语言。

```javascript
var a = function() {
  var test = {};
  setTimeout(function() {
    console.log(test);
  }, 1000);
};
```

上面的例子中，test 在 a 中定义，但在 setTimeout 的参数（函数）中对它保持了引用。当 a 被执行了，尽管 a 已经执行完（已经执行完），理论上来说 a 这个函数执行过程中产生的变量、对象都可以被销毁。但 test 由于被引用，所以不能随这个函数执行结束而被销毁，直到定时器里的函数被执行掉。另外再来个例子：

```javascript
var obj = function() {
  var a = "";
  return {
    set: function(val) {
      a = val;
    },
    get: function() {
      return a;
    }
  };
};

var b = obj();
b.set("new val");
b.get();
```

以上 obj 这个函数在执行完之后理论上 函数体内东西都应该被回收掉。但它执行后的返回值 b 具有 set 和 get 方法。这两个方法里对 a 保持了引用，所以 obj 执行过程中产生的 a 就不会销毁。直到 b 先被回收，这个 a 才会回收。引用维基百科：闭包（Closure）是词法闭包（Lexical Closure）的简称，是引用了自由变量的函数。这个被引用的自由变量将和这个函数一同存在，即使已经离开了创造它的环境也不例外。参照例子 理解下吧。

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

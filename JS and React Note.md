# Bind this
如果你的点击事件触发的方法里需要引用 this。就需要绑定啊。不然你的 this 是 null（记得如果没绑定 this 应该是全局 window。但这里 this 就是 null，撸完手上的需求去看一下 react 源码 ）
所以 你要么在创建的时候绑定：
```javascript
<div className="save" onClick={this.handleClick.bind(this)}>Save</div>
```
要么在一开始构造器里声明绑定
constructor(props){
  super(props);
  this.handleClick=this.handleClick.bind(this)
还有一种是利用闭包把作用域包起来
```javascript
<div className="save" onClick={()=>this.handleClick}>Save</div>
```
 如果用第一种 会在每次点击时通过 bind 创建一个新的方法，所以一般用 2 3 两种情况，显示调用 bind() 只是为了保证 this 值。
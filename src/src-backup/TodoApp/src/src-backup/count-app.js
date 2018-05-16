class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.handlePlusOne = this.handlePlusOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
        count: 0
      };
    }
    componentDidMount() {
      const result = parseInt(localStorage.getItem("count"));
      if (!isNaN(result)) {
        this.setState(() => ({ count: result }));
      }
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem("count", this.state.count);
        console.log("Save succeed!");
      }
    }
    handlePlusOne() {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }
    handleMinusOne() {
      this.setState(prevState => ({ count: prevState.count - 1 }));
    }
  
    handleReset() {
      this.setState(() => ({ count: 0 }));
    }
  
    render() {
      return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.handlePlusOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Counter />, document.getElementById("countApp"));
class InvisibleApp extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
    this.state = {
      text: "Hello and fuck you",
      visibility: false
    };
  }
  buttonClick() {
    this.setState(prevState => ({ visibility: !prevState.visibility }));
  }
  render() {
    const text = "Hello and fuck you";
    let visibility = false;
    return (
      <div>
        <h1>Invisible App</h1>
        <button onClick={this.buttonClick}>
          {this.state.visibility === true ? "Hide" : "Show"} detail
        </button>
        <h2>{this.state.visibility === true ? this.state.text : ""}</h2>
      </div>
    );
  }
}

ReactDOM.render(<InvisibleApp />, document.getElementById("invisibleApp"));

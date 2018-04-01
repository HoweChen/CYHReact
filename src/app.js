class Header extends React.Component {
  render() {
    return (
      <div>
        <p>This is from Header</p>
      </div>
    );
  }
}

const jsx = (
  <div>
    <h1>Header</h1>
    <Header />
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));

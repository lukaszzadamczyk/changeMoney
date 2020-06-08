const Cash = (props) => {
  return (
    <div>
      {props.tittle}
      {props.cash > 0 ? (props.cash / props.retio).toFixed(2) : ""}
    </div>
  );
};

class App extends React.Component {
  state = {
    cash: "",
  };

  currencies = [
    { id: 1, name: "euro", retio: 4.4, tittle: "Euro:" },
    { id: 2, name: "pound", retio: 5.0, tittle: "Pound:" },
    { id: 3, name: "dollar", retio: 4.0, tittle: "Dollars:" },
  ];

  handleChange = (e) => {
    this.setState({
      cash: e.target.value,
    });
  };

  render() {
    const calc = this.currencies.map((currency) => {
      return (
        <Cash
          key={currency.id}
          name={currency.name}
          retio={currency.retio}
          tittle={currency.tittle}
          cash={this.state.cash}
        />
      );
    });

    return (
      <div className="wrap">
        <label>
          Enter the amount:
          <input
            type="number"
            value={this.state.cash}
            onChange={this.handleChange}
          />
        </label>
        {calc}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

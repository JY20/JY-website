import React from "react";
import "./App.css";
import Home from "./pages/home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height:512,
      width:21,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      this.updateWindowDimensions.bind(this)
    );
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={{background:""}}>
          <Home height={this.state.height} width={this.state.width} />
        </header>
      </div>
    );
  }
}

export default App;
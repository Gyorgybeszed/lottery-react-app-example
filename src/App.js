import './App.css';
import lottery from './lottery';
import { Component } from 'react';

class App extends Component  {

  state = {
     manager: ""
  };

  async componentDidMount() {
    console.log("Component did mount called...")
    console.log(lottery);
    const manager = await lottery.methods.manager().call();
    console.log("The manager is: ", manager);
    this.setState({ manager });
  }

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {this.state.manager}</p>
      </div>
    );
  }
}


export default App;

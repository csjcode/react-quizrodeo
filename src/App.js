import React, { Component } from 'react';
import CardList from './CardList'
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      columns:3
    }
  }
  
  changeColumns = (e) => {
    this.setState(prevState => ({columns:e}));
    // alert(e);
    // alert(this.state.columns);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Quiz Rodeo</h1>
        </header>
        <p className="App-intro">
          This is a Quiz Rodeo test.
        </p>        
        <div>
          <button 
            style={{padding:10, marginRight:10}} 
            onClick={()=>this.changeColumns(1)}>
             1 Column
          </button> 
          <button 
            style={{padding:10, marginRight:10}} 
            onClick={()=>this.changeColumns(3)}>
              3 Column
            </button>
				</div>
        <CardList columns={this.state.columns} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import FlipCard from './FlipCard'
import CardList from './CardList'
import Papa from 'papaparse'
import styled from 'styled-components';
import logo from './logo.svg';
// import myData from './myData.json';
// import myDataCSV from './AWS-LIST.csv';
import './App.css';


class App extends Component {

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
          <CardList />
      </div>
    );
  }
}

export default App;

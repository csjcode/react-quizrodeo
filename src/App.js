import React, { Component } from 'react';
import FlipCard from './FlipCard'
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Wrap = styled.section`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
border: 1px solid red;
// margin: 0 auto;
padding: 4em 0;
width: 100%;
background: white;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Quiz Rodeo</h1>
        </header>
        <p className="App-intro">
          This is a test.
        </p>
        <Wrap>
          <FlipCard textFront='myFront 1' textBack='myBack 1' />
          <FlipCard textFront='myFront 2' textBack='myBack 2' />
          <FlipCard textFront='myFront 3' textBack='myBack 3' />
          <FlipCard textFront='myFront 4' textBack='myBack 4' />
          <FlipCard textFront='myFront 5' textBack='myBack 5' />
        </Wrap>
      </div>
    );
  }
}

export default App;

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

  renderList = () => {
    var myArrData = Array.from({length: 20}, (v, i) => i+1);

    return myArrData.map((v,i)=> {
      var textFrontTitle = 'textFrontTitle '  + v;
      var textFrontContent = 'lorem  '  + v;
      var textBackTitle = 'lorem  '  + v;
      var textBackContent = 'textBackContent '  + v;
      return (
      <FlipCard 
        textFrontTitle={textFrontTitle} 
        textBackTitle={textBackTitle} 
        textFrontContent={textFrontContent} 
        textBackContent={textBackContent} 
      />
     )
    })
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
        <Wrap>

          {this.renderList()}
        </Wrap>
      </div>
    );
  }
}

export default App;

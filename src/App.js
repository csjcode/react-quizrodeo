import React, { Component } from 'react';
import FlipCard from './FlipCard'
import styled from 'styled-components';
import logo from './logo.svg';
import myData from './myData.json';
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
    // var myArrData = Array.from({length: 20}, (v, i) => i+1);

    var textFrontTitle, textFrontContent, textBackTitle,textBackContent;

    return myData.map((v,i)=> {

      // (myData[i]["A"] !== '') ? textFrontTitle = myData[i]["Q"] : textFrontTitle = 'textFrontTitle '  + i;
      textFrontTitle = '';
      (myData[i]["A"] !== '') ? textFrontContent = myData[i]["Q"] : textFrontContent = 'textFrontContent '  + i;

  
      var textBackTitle = '';
      (myData[i]["A"] !== '') ? textBackContent = myData[i]["A"] : textBackContent = 'textBackContent '  + i;

      if ((!myData[i]["A"])||(!myData[i]["Q"])) { return null } // catch and remove non-quiz rows

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

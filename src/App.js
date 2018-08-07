import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  const Wrapper = styled.section`
    margin: 0 auto;
    padding: 4em;
    width: 100%;
    background: white;
  `;



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Quiz Rodeo</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Wrapper>
          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
          >
            <FrontSide
              style={{
                backgroundColor: '#41669d',
              }}
            >
              RICK
            </FrontSide>
            <BackSide
              style={{ backgroundColor: '#175852'}}>
              ROCKS
            </BackSide>
          </Flippy>
        </Wrapper>
      </div>
    );
  }
}

export default App;

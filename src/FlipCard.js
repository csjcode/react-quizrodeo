import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import styled from 'styled-components';

class FlipCard extends Component {

  render() {
    
	 return (
		<div style={{padding: 10}}>
          <Flippy
            flipOnHover={true} // default false
            flipOnClick={true} // default false
            flipDirection="vertical" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '600px', height: '400px' }} /// these are optional style, it is not necessary
          >
            <FrontSide
              style={{
                backgroundColor: '#fff',
              }}
            >
              <div style={{padding:'20px 0'}}><span>{this.props.textFrontTitle ? this.props.textFrontTitle : `DEFAULT FRONT TITLE`}</span></div>
              <div style={{padding:'20px 0'}}><span>{this.props.textFrontContent ? this.props.textFrontContent : `DEFAULT FRONT CONTENT`}</span></div>
            </FrontSide>

            <BackSide
              style={{ backgroundColor: '#e7e7e7'}}>
              <div style={{padding:'20px 0'}}><span>{this.props.textBackTitle ? this.props.textBackTitle : `DEFAULT BACK TITLE`}</span></div>
              <div style={{padding:'20px 0'}}><span>{this.props.textBackContent ? this.props.textBackContent : `DEFAULT BACK CONTENT`}</span></div>
            </BackSide>

          </Flippy>
		</div>
	 )
  }
}

export default FlipCard;

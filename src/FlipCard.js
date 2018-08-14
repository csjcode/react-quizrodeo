import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import styled from 'styled-components';

class FlipCard extends Component {
  render() {
	 return (
		<div style={{padding: 10}}>
          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '800px', height: '400px' }} /// these are optional style, it is not necessary
          >
            <FrontSide
              style={{
                backgroundColor: '#fff',
              }}
            >
              {this.props.textFront ? this.props.textFront : `FRONT`}
            </FrontSide>
            <BackSide
              style={{ backgroundColor: 'silver'}}>
              {this.props.textFront ? this.props.textFront : `BACK`}
            </BackSide>
          </Flippy>
		</div>
	 )
  }
}

export default FlipCard;

import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import styled from 'styled-components';

class FlipCard extends Component {

  replaceLineBreak = (str) => {
    var myHtml = str.replace(/- /g,'<br />-');
    // myHtml = str.replace('-','<br />-');
    // var myHtml = str;
    console.log(myHtml); 
    return {__html: myHtml};
  }

  render() {

    var cardFontSize = '18px';
    
    if(this.props.textFrontContent.length > 500){ cardFontSize = '16px'; }
    if(this.props.textFrontContent.length > 1000){ cardFontSize = '12px'; }
    if(this.props.columns === 1){ 
      var cardRowWidth = '100%';
      var cardRowMargin = '0 50%';
    } else { 
      var cardRowWidth = '600px'
      var cardRowMargin = '';
    }

    // var textFrontContent = this.props.textFrontContent.replace('- ','\n');
    
	 return (
		<div style={{padding: 10, width:cardRowWidth, margin:cardRowMargin}} onClick={() => this.props.handleAlert(this.props.cardId)}>
          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="vertical" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '600px', height: '400px', fontSize:cardFontSize, flex:'1' }} /// these are optional style, it is not necessary
          >
            <FrontSide
              style={{
                backgroundColor: '#fff',
              }}
            >  
              <div style={{padding:'20px 0px', border:'1px solid silver'}}><span>{this.props.cardId}</span></div>
              {/* <div style={{padding:'20px 0'}}><span>{this.props.textFrontTitle ? this.props.textFrontTitle : ``}</span></div> */}
              <div style={{padding:'20px 0'}}><span dangerouslySetInnerHTML={this.replaceLineBreak(this.props.textFrontContent)}></span></div>
            </FrontSide>

            <BackSide
              style={{ backgroundColor: '#e7e7e7'}}
              >
              <div style={{padding:'20px 0px', border:'1px solid silver'}}><span>{this.props.cardId}</span></div>
              <div style={{padding:'20px 0'}}><span >{this.props.textBackTitle ? this.props.textBackTitle : ``}</span></div>
              <div style={{padding:'20px 0'}}><span dangerouslySetInnerHTML={this.replaceLineBreak(this.props.textBackContent)}></span></div>
            </BackSide>

          </Flippy>
		</div>
	 )
  }
}

export default FlipCard;

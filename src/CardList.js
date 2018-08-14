import React, { Component } from 'react';
import FlipCard from './FlipCard'
import Papa from 'papaparse'
import styled from 'styled-components';
import logo from './logo.svg';
// import myData from './myData.json';
// import myDataCSV from './AWS-LIST.csv';
import myDataCSV from './AWS-ARCH.csv';
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

class CardList extends Component {
	constructor(props){
		super(props);
		this.state = {
			data:[]
		}
	}

  componentDidMount() {
    Papa.parse(myDataCSV, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData
    });
  }

	updateData = (result) => {
		const data = result.data;
		console.log(data)
		this.setState({data});
	}

	renderList = () => {
		
		if(this.state.data.length<2){
			return null
		} else {
			var myDataJSON = this.state.data;
		}
	 
		var textFrontTitle, textFrontContent, textBackTitle,textBackContent;
  
		return myDataJSON.map((v,i)=> {
  
		  // (myData[i]["A"] !== '') ? textFrontTitle = myData[i]["Q"] : textFrontTitle = 'textFrontTitle '  + i;
		  textFrontTitle = '';
		  (myDataJSON[i]["A"] !== '') ? textFrontContent = myDataJSON[i]["Q"] : textFrontContent = 'textFrontContent '  + i;
  
	 
		  var textBackTitle = '';
		  (myDataJSON[i]["A"] !== '') ? textBackContent = myDataJSON[i]["A"] : textBackContent = 'textBackContent '  + i;
  
		  if ((!myDataJSON[i]["A"])||(!myDataJSON[i]["Q"])) { return null } // catch and remove non-quiz rows
  
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
			<Wrap>
				{this.renderList()}
			</Wrap>
		)
	}
}

export default CardList



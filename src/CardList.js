import React, { Component } from 'react';
import FlipCard from './FlipCard'
import Loading from './Loading'
import Papa from 'papaparse'
import styled from 'styled-components';
import arrayShuffle from './helpers/arrayShuffle'
// import myData from './myData.json';
// import myDataCSV from './AWS-LIST.csv';
import myDataCSV from './AWS-GL.csv';
// import myDataCSV from './AWS-ARCH.csv';
import './App.css';

const Wrap = styled.section`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
	// border: 1px solid red;
	// margin: 0 auto;
	padding: 4em 0;
	width: 100%;
	background: white;
`; 

class CardList extends Component {
	constructor(props){
		super(props);
		this.state = {
			data:[],
			cardsFlipped:[]
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

   handleAlert = (cardId) => {
		if(this.state.cardsFlipped.indexOf(cardId)<0){
			this.setState(prevState => ({
				cardsFlipped: [...prevState.cardsFlipped, cardId]
			}))
		} else {
			let arrCardsFlipped = this.state.cardsFlipped;
			arrCardsFlipped.splice(arrCardsFlipped.indexOf(cardId),1);
			this.setState(prevState => ({
				cardsFlipped: arrCardsFlipped
			}))			
		}
		// alert(cardId);
	}

	updateData = (result) => {
		const data = result.data;
		console.log('updated data');
		// var dataShuffle = arrayShuffle(data);

		this.setState({data});
	}

	renderList = () => {
		
		if(this.state.data.length<2){
			return <Loading msg="Loading data..."/>
		} else {
			var myDataJSON = this.state.data;
		}
	 
		var textFrontTitle, textFrontContent, textBackTitle, textBackContent, countCard;
  
		return myDataJSON.map((v,i)=> {
  
		  // (myData[i]["A"] !== '') ? textFrontTitle = myData[i]["Q"] : textFrontTitle = 'textFrontTitle '  + i;
		  textFrontTitle = '';
		  countCard = i+1;

		  (myDataJSON[i]["A"] !== '') ? textFrontContent = myDataJSON[i]["Q"] : textFrontContent = 'textFrontContent '  + i;
  
	 
		  var textBackTitle = '';
		  (myDataJSON[i]["A"] !== '') ? textBackContent = myDataJSON[i]["A"] : textBackContent = 'textBackContent '  + i;
  
		  if ((!myDataJSON[i]["A"])||(!myDataJSON[i]["Q"])) { return null } // catch and remove non-quiz rows
  
		  return (
		  		<FlipCard 
				  	handleAlert={this.handleAlert}
					cardId={countCard} 
					textFrontTitle={textFrontTitle} 
					textBackTitle={textBackTitle} 
					textFrontContent={textFrontContent} 
					textBackContent={textBackContent} 
		  />
		 )
		})
	 }

	render() {
		console.log(this.state.cardsFlipped);
		return (
			<Wrap>
				{this.renderList()}
			</Wrap>
		)
	}
}

export default CardList



import React, { Component } from 'react';
import {connect} from 'react-redux';
import Clue from './Clue/Clue';
import logo from './logo.svg';
import './App.css';
import Answerbox from './AnswerBox/AnswerBox';
import { clueSelected, seas, cluesLoaded } from './store/actions';
import {fetchClues} from './store/thunks';




export class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      submittedAnswer:'',
      score: 0,
      clues:[],
      
    };
    this.getclue();
    //this.handleAnswerInput = this.handleAnswerInput.bind(this);
    console.log(this.handleAnswerInput)
}

handleClueSelection(clue)
{
this.props.selectClue(clue);
//console.log(e);
}


handleAnswerInput = (e) =>
{
  this.setState ({
    submittedAnswer: e.target.value
  });
  console.log(e);
}

handleAnswerSubmission = (e) =>
{

  const subAnswer = this.state.submittedAnswer.toLowerCase();
  const answer = this.props.selectedClue.answer.toLowerCase();

  if(subAnswer == answer)
  {
    this.setState({
      score: this.state.score +this.props.selectedClue.value,
      submittedAnswer: '',
      
    });
  }
  else
  {
    this.setState({
      score: this.state.score -this.props.selectedClue.value,
      submittedAnswer:'',
    
    });
  }
  this.props.submitAnswer();
  this.getclue();
}

getclue(){

  this.props.fetchClues();
}

  render() 
  {
    return (
      <div className="App">
      <h1>## Jeopardy ##</h1>
        <p>Score: $ {this.state.score}</p>
        {/*<Clue question={this.state.question}
        categoryName = {this.state.categoryName}
    value = {this.state.value}/>*/}
    {
      this.props.clues.map(clue => (
        <Clue question = {clue.question}
              categoryName = {clue.category.title}
              value = {clue.value}
              key = {clue.id}
              selected = {this.props.selectedClue == clue}
              handleClueSelection = {() => this.handleClueSelection(clue)}
              />

      ))
    }
<Answerbox submittedAnswer = {this.state.submittedAnswer}
            handleAnswerInput ={this.handleAnswerInput}
            handleAnswerSubmission = {this.handleAnswerSubmission}
            visible = {this.props.selectedClue !== null}
/>

        

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedClue: state.selectedClue,
    clues:state.clues,
  };
};
const mapDispatchToProps = dispatch =>{
return{

  selectClue: clue => dispatch(clueSelected(clue)),
  submitAnswer: () => dispatch(seas()),
  fetchClues: () => dispatch(fetchClues()),
};

};
export default connect(mapStateToProps,mapDispatchToProps)(App);


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Image import
import arrowIcon from '../img/right-arrow.svg';

export default class Question extends Component {

  constructor(props) {
    super(props);
    this.contentRef = null;
  }

  state = {
    index: 0,
    questions: this.props.questions,
    correctAnswer: "",
    score: 0,
    doLoadQuestion: false
  }

  loadQuestion = () => {

    const index = this.state.index;

    this.setState({
      correctAnswer: this.state.questions[index].correctAnswer,
      question: this.state.questions
    });

  }

  formatBoldText(text) {
    const jsxTest = text.split(" ").map(word => {
      const splittedWord = word.split("");
      if (splittedWord[0] === "_" && splittedWord[1] === "_") {
        splittedWord.splice(0, 1);
        splittedWord[0] = "<span>";
        splittedWord.splice(splittedWord.length - 1, 1);
        splittedWord[splittedWord.length - 1] = "</span>";
      }
      return splittedWord.join("");
    });

    return jsxTest.join(" ");

  }

  callNext = () => {
    this.setState({
      doLoadQuestion: true
    })
  }


  render() {

    return (
      <div className="question">
        <div className="question__content" ref={div => this.contentRef = div}>
          {
            this.state.doLoadQuestion ?
            <p dangerouslySetInnerHTML={{__html: this.formatBoldText(this.state.questions[this.state.index].questionContent)}}></p> :
            <p dangerouslySetInnerHTML={{__html: this.formatBoldText(this.state.questions[this.state.index].fact)}}></p>
          }
        </div>

        <div className="question__content__backBtn">
          <Link to="/">
            <img src={arrowIcon} alt="Go back" />
          </Link>
        </div>
        <div className="question__content__nextBtn" onClick={this.callNext} >
          <img src={arrowIcon} alt="Go forward" />
        </div>
      </div>
    )
  }
}

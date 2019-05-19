import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Image import
import arrowIcon from '../img/right-arrow.svg';

export default class Question extends Component {

  state = {
    questionContent: this.props.content.questionContent,
    correctAnswer: this.props.content.correctAnswer,
    fact: this.props.content.fact,
    doLoadQuestion: false,
    answers: this.props.content.answers
  }

  formatBoldText(text) {
    const splittedString = text.split("");

    const history = {
      firstFind: false,
      positionOfFirst: 0,
      spanPlaced: false
    }

    for (var i = 0; i < splittedString.length; i++) {
      if (splittedString[i] === "_" && !history.firstFind) {

        history.firstFind = true;
        history.positionOfFirst = i;
      } else if (splittedString[i] === "_" && history.firstFind) {

        delete splittedString[history.positionOfFirst];
        if (history.spanPlaced) {
          splittedString[i] = "</span>";
          history.spanPlaced = false;
        } else {
          splittedString[i] = "<span>";
          history.spanPlaced = true;
        }
        history.firstFind = false;
      }
    }

    return splittedString.join("");

  }

  callNext = () => {
    this.setState({
      doLoadQuestion: true
    });
  }

  checkAnswer = (event) => {
    const clickedAnswer = event.target.getAttribute("data-answer");
    if (this.state.correctAnswer === clickedAnswer) {
      console.log("Yay you win!");
      this.setState({
        doLoadQuestion: false
      })
      this.props.updateIndex();
    }
  }




  render() {



    return (
      <div className="question">
        <div className="question__content" ref={div => this.contentRef = div}>
          {
            this.state.doLoadQuestion ?
              <p dangerouslySetInnerHTML={{ __html: this.formatBoldText(this.state.questionContent) }}></p> :
              <p dangerouslySetInnerHTML={{ __html: this.formatBoldText(this.state.fact) }}></p>
          }
        </div>
        <div className="question__answers">
          {
            this.state.doLoadQuestion ?

              <div className="question__answers__content">
                <label className="question__answers__content__answer" data-answer="a" onClick={e => this.checkAnswer(e)}>
                  {this.state.answers.a}
                  <input type="radio" name="answer" id="answerA" />
                </label>

                <label className="question__answers__content__answer" data-answer="b" onClick={e => this.checkAnswer(e)}>
                  {this.state.answers.b}
                  <input type="radio" name="answer" id="answerB" />
                </label>

                <label className="question__answers__content__answer" data-answer="c" onClick={e => this.checkAnswer(e)}>
                  {this.state.answers.c}
                  <input type="radio" name="answer" id="answerC" />
                </label>

              </div>

              :

              null
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

import React, { Component } from 'react';

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

  markdownToHTML(text) {

    var md = require('markdown-it')();
    var result = md.render(text);
    return result;

  }

  callNext = () => {
    this.setState({
      doLoadQuestion: true
    });
  }

  callPrev = () => {
    if(this.props.index === 0){
      window.location = "/";
    } else {
      this.props.goBack();
    }
    
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
              <p dangerouslySetInnerHTML={{ __html: this.markdownToHTML(this.state.questionContent) }}></p> :
              <p dangerouslySetInnerHTML={{ __html: this.markdownToHTML(this.state.fact) }}></p>
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

        <div className="question__content__backBtn" onClick={this.callPrev}>
            <img src={arrowIcon} alt="Go back" />
        </div>
        <div className="question__content__nextBtn" onClick={this.callNext} >
          <img src={arrowIcon} alt="Go forward" />
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';

// Image import
import arrowIcon from '../img/right-arrow.svg';

export default class Question extends Component {

  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
  }

  state = {
    index: 0,
    questions: this.props.questions,
    correctAnswer: ""
  }

  loadQuestion(index) {
    this.contentRef.inneHTML = "";

    this.setState({
      correctAnswer: this.state.questions[index].correctAnswer
    });
    return <div className="question__content__title">
      <h3>{this.state.questions[index].questionContent}</h3>
      <div className="question__content__answers">
        <form>
          <input type="radio" name="answer" value={this.state.questions[index].answers.a} /> <p> { this.state.questions[index].answers.a } </p> <br />
          <input type="radio" name="answer" value={this.state.questions[index].answers.b} /> <p> { this.state.questions[index].answers.b } </p> <br />
          <input type="radio" name="answer" value={this.state.questions[index].answers.c} /> <p> { this.state.questions[index].answers.c } </p> <br />
        </form>
      </div>
    </div>
  }

  loadFact(index) {
    return <div className="question__content__fact">
              <p>
                {this.state.questions[index]}
              </p>
          </div>
  }


  render() {
    return (
      <div className="question">
        <div className="question__content" ref={this.contentRef}>
        {
          this.loadFact()
        }
        </div>

        <div className="question__content__backBtn">
                <img src={arrowIcon} alt="Go back" />
              </div>
              <div className="question__content__nextBtn">
                <img src={arrowIcon} alt="Go forward" />
              </div>
        </div>
    )
  }
}

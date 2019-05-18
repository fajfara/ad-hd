import React, { Component } from 'react'

export default class Question extends Component {

  state = {
    index: 0,
    questions: this.props.questions
  }

  startQuestions = () => {
    console.log(this.state.questions);
    this.loadQuestion();
  }

  loadQuestion() {
    return <div className="question__content">
              <div className="question__content__title">
                <h3>{ this.state.questions[this.state.index].questionContent }</h3>
                <div className="question__content__answers">
                  <form>
                    <input type="radio" name="gender" value={this.state.questions[this.state.index]} />
                  </form>
                </div>
              </div>
            </div>
  }


  render() {
    return (
      <div className="question">
        {
          this.startQuestions()
        }
      </div>
    )
  }
}

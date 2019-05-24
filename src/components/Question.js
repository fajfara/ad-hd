import React, { Component } from 'react';
import  { withRouter } from 'react-router-dom';

// Image import
import arrowIcon from '../img/right-arrow.svg';

var md = require('markdown-it')();

class Question extends Component {

  state = {
    questionContent: this.props.content.questionContent,
    correctAnswer: this.props.content.correctAnswer,
    fact: this.props.content.fact,
    answers: this.props.content.answers,
    doLoadQuestion: false
  }

  
  markdownToHTML(text) {
    // Formatiranje markdown-a ki se ga dobi iz contentfull cms-ja
    var result = md.render(text);
    return result;

  }

  
  callNext = () => {
    // Naloži naslednje vprašanje, v controllerju povečaj index
    this.setState({
      doLoadQuestion: true
    });
  }

  
  callPrev = () => {
    // glede na to kje smo, ustrezno manipuliraj state
    if(this.props.index === 0 && !this.state.doLoadQuestion){
      this.props.history.push('/');
    } else {
      if(this.state.doLoadQuestion){
        this.setState({
          doLoadQuestion: false
        });
        return;
      }
      this.props.goBack();
    }
    
  }


  checkAnswer = (event) => {
    const clickedAnswer = event.target.getAttribute("data-answer");
    if (this.state.correctAnswer === clickedAnswer) {
      // Če je pravilni odgovor naloži novo vprašanje
      this.setState({
        doLoadQuestion: false
      });
      this.props.updateIndex();
    } else {
      // Če je napačen odgovor naloži fact
      this.monkeySaysWrong();
    }
  }

  monkeySaysWrong() {
    console.log("You are wrong!");
    this.setState({
      doLoadQuestion: false
    });
  }




  render() {
    // Pod render je vse logika glede render vprašanj vezana na doLoadQuestion pod state on componente
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
        {
          this.state.doLoadQuestion 

          ?

          null

          :
          <div className="question__content__nextBtn" onClick={this.callNext} >
            <img src={arrowIcon} alt="Go forward" />
          </div> 

        }
      </div>
    )
  }
}


export default withRouter(Question);

import React, { Component } from 'react';
import Ribbon from "../img/ribbon.png";
import Monkey from "../img/monkey.png";


export default class Home extends Component {
  render() {
    return (
      <>
        <section className="main">
          <div className="main-title">
            <img src={Ribbon} alt="Ribbon" className="main-title__ribbon" />
            <img src={Monkey} alt="Monkey" className="main-title__monkey" />
            <div className="main-title__top">
              <div className="main-title__left">
                <h2>AD</h2>
              </div>
              <div className="main-title__center">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="main-title__right">
                <h2>HD</h2>
              </div>
            </div>
            <div className="main-title__bottom_text">
              <p>
                For those about <span>oh look a monkey</span>
              </p>
            </div>
          </div>

          <div className="main-scroll-down">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
              <span className="text">Scroll down</span>
            </div>
        </section>

        
        <section className="instructions">
          <div className="instructions__main">
            <div className="instructions__main__top-content">
              <p>
                Greetings inatentive/hyperactive people, welcome to the AD/HD exploring 
                website where you will not only learn about AD/HD but will have fun doing so.
              </p>
            </div>
            <div className="instructions__main__buffer"></div>
            <div className="instructions__main__bottom-content">
              <div className="instructions__main__bottom-content__left">

              </div>
              <div className="instructions__main__bottom-content__right">
                <h3>Instructions:</h3>
                <p>
                  Follow the monkey through the text, but in the end, the monkey will not be able 
                  to go through if you do not answer the question correctly, this is the fun part! 
                </p>
              </div>
              
            </div>

            <div className="instructions__main__next-button">
              <button>Start</button>
            </div>
          </div>
        </section>
      </>
    )
  }
}

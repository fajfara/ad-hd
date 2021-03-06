import React, { Component } from 'react';

import nextButton from '../img/right-arrow.svg';
import Ribbon from "../img/ribbon.png";
import Monkey from "../img/monkey.png";
import Cloud from "../img/svg/cloud.svg";

/* 
import layer_one from '../img/svg/layer_one.svg';
import layer_two from '../img/svg/layer_two.svg';
import layer_three from '../img/svg/layer_three.svg'; 

*/

import layer_one from '../img/svg/background/layer_one.svg';
import layer_two from '../img/svg/background/layer_two.svg';
import layer_three from '../img/svg/background/layer_three.svg';
import layer_four from '../img/svg/background/layer_four.svg';
import layer_five from '../img/svg/background/layer_five.svg';



import { Link } from 'react-router-dom';

import { TimelineMax } from 'gsap';

import Parallax from 'parallax-js';



export default class Home extends Component {

  constructor(props) {
    super(props);

    // Refs for animation
    this.titleLeft = null;
    this.titleRight = null;
    this.titleCenter = null;
    this.adhdSign = null;
    this.underADHDSign = null;
    this.monkey = null;
    this.scrollDown = null;

    // Options for this component
    this.options = {
      animationDuration: 0.8
    }

    this.options.animationDelay = "-=" + this.options.animationDuration;

    // Timelines for animation
    this.initalLoadTween = null;
  }

  componentDidMount() {
    // Timeline za landing load
    this.initLandingTimeline();
    // Zaženi timeline
    this.initalLoadTween.play();

    const scene = document.getElementById('scene');
    // eslint-disable-next-line
    const parallaxInstance = new Parallax(scene);
  }



  initLandingTimeline() {
    this.initalLoadTween = new TimelineMax()
      .from(this.titleLeft, this.options.animationDuration, {
        opacity: 0,
        left: "-30rem"
      })
      .from(this.titleCenter, this.options.animationDuration, {
        opacity: 0,
        bottom: "-30rem"
      }, this.options.animationDelay)
      .from(this.titleRight, this.options.animationDuration, {
        opacity: 0,
        left: "30rem"
      }, this.options.animationDelay)
      .from(this.adhdSign, this.options.animationDuration, {
        opacity: 0,
        top: "-30rem"
      })
      .from(this.underADHDSign, this.options.animationDuration, {
        opacity: 0,
        bottom: "-30rem"
      }, this.options.animationDelay)
      .from(this.monkey, this.options.animationDuration, {
        opacity: 0,
        left: "80%"
      }, "+=0.5")
      .from(this.scrollDown, this.options.animationDuration, {
        opacity: 0,
        bottom: "10rem"
      })

    // Restart
  }

  markdownToHTML(text) {

    var md = require('markdown-it')();
    var result = md.render(text);
    return result;

  }

  render() {

    return (
      <>
        <div id="clouds">
          <div className="cloud x1"><img src={Cloud} alt="Cloud moving across screen" /></div>

          <div className="cloud x2"><img src={Cloud} alt="Cloud moving across screen" /></div>

          <div className="cloud x3"><img src={Cloud} alt="Cloud moving across screen" /></div>

          <div className="cloud x4"><img src={Cloud} alt="Cloud moving across screen" /></div>
        </div>
        <section className="main">
          <div className="main-title">
            <img src={Ribbon} alt="Ribbon" className="main-title__ribbon" ref={div => this.adhdSign = div} />
            <img src={Monkey} alt="Monkey" className="main-title__monkey" ref={div => this.monkey = div} />
            <div className="main-title__top">
              <div className="main-title__left" ref={div => this.titleLeft = div}>
                <h2>AD</h2>
              </div>
              <div className="main-title__center" ref={div => this.titleCenter = div}>
                <i className="fas fa-bolt"></i>
              </div>
              <div className="main-title__right" ref={div => this.titleRight = div}>
                <h2>HD</h2>
              </div>
            </div>
            <div className="main-title__bottom_text" ref={div => this.underADHDSign = div}>
              <p>
                For those about <span>oh look a monkey</span>
              </p>
            </div>
          </div>

          <div className="main-scroll-down" ref={div => this.scrollDown = div}>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <span className="text">Scroll down</span>
          </div>
        </section>


        <section className="instructions">
          <div className="instructions__main">
            <div className="instructions__main__top-content">
              <h3>Greetings inatentive/hyperactive people!</h3>
              <p>
                Welcome to the AD/HD exploring website where you will not only learn about AD/HD but will have fun doing so.
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
              <div className="instructions__main__next-button__icon">
                <Link to="/questions">
                  <img src={nextButton} alt="Next button" />
                </Link>
              </div>
            </div>

            <div className="instructions__main__background" id="scene">
              <div className="instructions__main__background__layer_one" data-depth="0.2">
                <img src={layer_one} alt="svg background" />
              </div>

              <div className="instructions__main__background__layer_two" data-depth="0.1">
                <img src={layer_two} alt="svg background" />
              </div>

              <div className="instructions__main__background__layer_three" data-depth="0.05">
                <img src={layer_three} alt="svg background" />
              </div>

              <div className="instructions__main__background__layer_four" data-depth="0.02">
                <img src={layer_four} alt="svg background" />
              </div>

              <div className="instructions__main__background__layer_five" data-depth="0">
                <img src={layer_five} alt="svg background" />
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}




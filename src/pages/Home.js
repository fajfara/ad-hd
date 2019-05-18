import React, { Component } from 'react';
import Ribbon from "../img/ribbon.png";


export default class Home extends Component {
  render() {
    return (
      <>
        <div className="main-title">
          <img src={ Ribbon } alt="Ribbon" className="main-title__ribbon"/>
          <div className="main-title__left">
            <h2>AD</h2>
          </div>
          <div className="main-title__center">
            <i class="fas fa-bolt"></i>
          </div>
          <div className="main-title__right">
            <h2>HD</h2>
          </div>
        </div>
      </>
    )
  }
}

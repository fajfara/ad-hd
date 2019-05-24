import React, { Component } from 'react';
import Question from './Question';


// Import layerjev za parallax
import layer_one from '../img/svg/layer_one.svg';
import layer_two from '../img/svg/layer_two.svg';
import layer_three from '../img/svg/layer_three.svg';

import Parallax from 'parallax-js';



const contentful = require('contentful')



export default class Questions extends Component {

    state = {
        questions: [],
        loadQuestion: false,
        index: 0,
        score: 0,
        firstQuestionLoaded: true,
        questionFull: null
    }

    componentDidMount() {
        // Get data from contentful
        this.loadContentfulData();

        const scene = document.getElementById('scene2');
        // eslint-disable-next-line
        const parallaxInstance = new Parallax(scene);
    }

    loadContentfulData = () => {
        const client = contentful.createClient({
            space: 'cre5ebqhkj2x',
            accessToken: 'NtR9pqRMhsYj-jGNYbgyBtwElGmRZTQal2-tsmZtjnQ'
        })

        client.getEntries()
            .then((response) => {
                this.setState({
                    questions: (response.items.map(item => item.fields)).reverse()
                }, () => {
                    this.setState({
                        questionFull: this.state.questions[this.state.index],
                        loadQuestion: true
                    })
                })
            })
            .catch(console.error);

    }

    
    updateIndex = () => {
    // Za premik po vprašanjih => povečevanje index-a
        this.setState({
            index: this.state.index + 1,
            loadQuestion: false
        }, () => {
            this.setState({
                questionFull: this.state.questions[this.state.index],
                loadQuestion: true
            })

        });

    }

    
    indexDown = () => {
    // Basically za going back => zmanjšaj index
    // TODO ko klikneš nazaj na fact gre nazaj na prejšnji question oz. če si na question gre nazaj na fact
        this.setState({
            index: this.state.index - 1,
            loadQuestion: false
        }, () => {
            this.setState({
                questionFull: this.state.questions[this.state.index],
                loadQuestion: true
            })

        });
    }


    render() {
        return (
            <div className="questions">
                {
                    this.state.loadQuestion ? <Question content={this.state.questionFull} updateIndex={this.updateIndex} goBack={this.indexDown} index={this.state.index} /> : <p>Loading...</p>
                }

                <div className="questions__background" id="scene2">
                    <div className="instructions__main__background__layer_one" data-depth="0.1">
                        <img src={layer_one} alt="svg background" />
                    </div>

                    <div className="instructions__main__background__layer_two" data-depth="0.2">
                        <img src={layer_two} alt="svg background" />
                    </div>

                    <div className="instructions__main__background__layer_three" data-depth="0.4">
                        <img src={layer_three} alt="svg background" />
                    </div>
                </div>

            </div>
        )
    }
}

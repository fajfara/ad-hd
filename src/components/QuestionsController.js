import React, { Component } from 'react';
import Question from './Question';
// ES Modules syntax
import Unsplash, { toJson } from 'unsplash-js';



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

        const unsplash = new Unsplash({
        applicationId: "5ceabb226649faf7b10d7438e5cab52a85fdc57ccdbca3cd4a96494caf22dea9",
        secret: "4f147e1338f381c09b5943e6db8515adaf67754938e8204d176a5a9996933a8d"
        });

        unsplash.photos.getPhotoStats("wVRluei0SvM")
        .then(toJson)
        .then(json => {
            console.log(json);
        });
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
        this.setState({
            index: this.state.index + 1,
            loadQuestion: false
        }, () => {
            this.setState({
                questionFull: this.state.questions[this.state.index],
                loadQuestion: true
            }, () => {
                console.log(this.state.questionFull)
            })
            
        });

    }


    render() {
        return (
            <div className="questions">
                {
                    this.state.loadQuestion ? <Question content={this.state.questionFull} updateIndex={this.updateIndex}/> : <p>Loading...</p>
                }
            </div>
        )
    }
}

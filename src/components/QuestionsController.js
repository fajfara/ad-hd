import React, { Component } from 'react';
import Question from './Question';

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

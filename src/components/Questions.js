import React, { Component } from 'react';
import Question from './Question';

const contentful = require('contentful')



export default class Questions extends Component {

    state = {
        questions: [],
        questionsLoaded: false
    }

    componentDidMount() {
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
                    questions: response.items.map( item => item.fields ),
                    questionsLoaded: true
                })
            })
            .catch(console.error)
    }

    startQuiz() {
        return this.state.questionsLoaded ? <Question questions={ this.state.questions } /> : <p>Loading...</p>;
    }

    render() {
        return (
            <div className="questions">
                {
                    this.startQuiz()
                }
            </div>
        )
    }
}

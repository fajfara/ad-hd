import React, { Component } from 'react';

const contentful = require('contentful')



export default class QuestionController extends Component {

    componentDidMount() {
        this.loadContentfulData();
    }

    loadContentfulData = () => {
        const client = contentful.createClient({
            space: 'cre5ebqhkj2x', // defaults to 'master' if not set
            accessToken: 'NtR9pqRMhsYj-jGNYbgyBtwElGmRZTQal2-tsmZtjnQ'
        })

        client.getEntries()
            .then((response) => console.log(response.items))
            .catch(console.error)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

import React, { Component } from 'react'
// import './App.css';

import ForumForm from './ForumForm';
import ForumList from './ForumList';
import { getAll, addNew } from '../services/restclient';

export default class ForumPage extends Component {
    state = {
        id: 0,
        nametag: "",
        post_content: "", 
        post_contents: []
    };

    componentDidMount = () => {
        this.updateView();
    }

    updateView = async () => {
        let data = await getAll();
        this.setState({ post_contents: data.data })
    }

    newPost = async (p) => {
        await this.setState({ nametag: p.nametag, post_content:p.post_content });
        await addNew(this.state)
        this.updateView();
    }

    render() {
        return (
            <div>
                < ForumForm newPost={this.newPost} />
                <br /><br />
                < ForumList post_contents={this.state.post_contents} />
            </div>
        )
    }
}
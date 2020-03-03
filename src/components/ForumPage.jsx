import React, { Component } from 'react'
// import './App.css';

import ForumForm from './ForumForm';
import ForumList from './ForumList';
import { getAll, addNew, editPost } from '../services/restclient';

export default class ForumPage extends Component {
    state = {
        post_id: 0,
        post_nametag: "",
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
        await this.setState({ post_nametag: p.post_nametag, post_content:p.post_content });
        await addNew(this.state)
        this.updateView();

    }
    editPost = async (p) => {
        const {post_contents} = this.state
            for (let j = 0; j < post_contents.length; j++) {
                if (post_contents[j].post_id === p.post_id) {
                    await this.setState({post_id: post_contents[j].post_id, post_nametag: p.post_nametag, post_content: p.post_content });
                    await editPost(this.state.post_id, this.state.post_nametag, this.state.post_content);
                }
                this.updateView();
            } 
    }

    render() {
        return (
            <div>
                < ForumForm newPost={this.newPost} />
                <br /><br />
                < ForumList post_contents={this.state.post_contents} editPost={this.editPost} />
            </div>
        )
    }
}
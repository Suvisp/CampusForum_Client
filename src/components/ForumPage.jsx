import React, { Component } from 'react'
// import './App.css';

import ForumForm from './ForumForm';
import ForumList from './ForumList';
import { getAll, addNew, editPost, deletePost } from '../services/restclient';
// import Like from '../components/Like';

export default class ForumPage extends Component {
    state = {
        post_id: 0,
        post_nametag: '',
        post_content: '',
        post_count: 0,
        post_contents: []
    };

    componentDidMount = () => {
        this.updateView();
    }

    updateView() {
        getAll().then(post_contents => {
            this.setState({ post_contents });
        }).catch(err => {
            console.error("Virhe kiinni", err);
            this.setState({ error: err.message })
        });
    }

    newPost = (p) => {
        addNew(p, () => {
            this.updateView();
        })
    }

    // updatePost = async (p) => {
    //     const { post_contents } = this.state
    //     for (let j = 0; j < post_contents.length; j++) {
    //         if (post_contents[j].post_id === p.post_id) {
    //             await this.setState({ post_id: post_contents[j].post_id, post_nametag: p.post_nametag, post_content: p.post_content });
    //             await editPost(this.state.post_id, this.state.post_nametag, this.state.post_content);
    //         }
    //         this.updateView();
    //     }
    // }

    removePost = (del_id) => {
        deletePost(del_id)
            .then((response) => {
                this.updateView();
            });
    }

    
    render() {
        return (
            <div>
                < ForumForm newPost={this.newPost} />
                <br /><br />
                < ForumList post_contents={this.state.post_contents} updatePost={this.updatePost} removePost={this.removePost} />
            </div>
        )
    }
}
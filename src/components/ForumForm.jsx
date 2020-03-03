import React, { Component } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import { Row, Col } from 'react-bootstrap'

export default class ForumForm extends Component {
    state = {
        nametag: "",
        post_content: "", 
        post_contents: []
    }

    nametagChange = (ev) => {
        this.setState({ nametag: ev.target.value });
    }

    postContentChange = (ev) => {
        this.setState({ post_content: ev.target.value });
    }

    newPost = () => {
        this.props.newPost(this.state);
        this.setState({ nametag: '', post_content: ''});
    }

    render() {
        return (
            <div>
                <h3>Create new Post</h3>
                <label htmlFor="pNameTag">Your nametag: </label>
                <input name="pNameTag" value={this.state.nametag} onChange={this.nametagChange}></input>
                <br></br>
                <label htmlFor="pPostContent">Write your post here: </label>
                <input name="pPostContent" value={this.state.post_content} onChange={this.postContentChange}></input>
               
                <input type="button" value="Create new post" onClick={this.newPost} />
            </div>
        )
    }
}
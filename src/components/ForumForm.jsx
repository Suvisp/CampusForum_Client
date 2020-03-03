import React, { Component } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import { Row, Col } from 'react-bootstrap'

export default class ForumForm extends Component {
    state = {
        post_nametag: "",
        post_content: "",
        post_id: 0, 
        post_contents: []
    }

    nametagChange = (ev) => {
        this.setState({ post_nametag: ev.target.value });
    }

    postContentChange = (ev) => {
        this.setState({ post_content: ev.target.value });
    }

    newPost = () => {
        this.props.newPost(this.state);
        this.setState({ post_nametag: '', post_content: ''});
    }

    render() {
        return (
            <div>
                <h3>Create new Post</h3>
                <label htmlFor="pNameTag">Your nametag: </label>
                <input name="pNameTag" value={this.state.post_nametag} onChange={this.nametagChange}></input>
                <br></br>
                <label htmlFor="pPostContent">Write your post here: </label>
                <input name="pPostContent" value={this.state.post_content} onChange={this.postContentChange}></input>
                <br></br>
                <input type="button" value="Submit" onClick={this.newPost} />
            </div>
        )
    }
}
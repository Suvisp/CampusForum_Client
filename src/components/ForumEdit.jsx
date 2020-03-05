import React, { Component } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import { Row, Col } from 'react-bootstrap'
import { getOne, editPost } from '../services/restclient';

export default class ForumEdit extends Component {
    constructor(props) {
        super(props);
        const post_id = this.props.match.params["id"];
        this.state = { post_contents: { post_id: 0, post_nametag: '', post_content: '' }, post_id: post_id };
    }

    componentDidMount = async () => {
        console.log(this.state.post_id)
        let data = await getOne(this.state.post_id);
        this.setState({ post_contents: data })
    }

    nametagChange = (ev) => {
        let post_nametag = ev.target.value
        this.setState(prevState => {
            return { post_contents: { ...prevState.post_contents, post_nametag: post_nametag } }
        })
    }

    postcontentChange = (ev) => {
        let post_content = ev.target.value
        this.setState(prevState => {
            return { post_contents: { ...prevState.post_contents, post_content: post_content } }
        })
    }

    update = () => {
        editPost(this.state.post_id, this.state.post_contents).then(() => {
            this.props.history.push("/")
        })
    }

    render() {
        return (
            <div>
                <h3>Edit post</h3>
                <label htmlFor="pNameTag">Your nametag: </label>
                <input name="pNameTag" value={this.state.post_contents.post_nametag} onChange={this.nametagChange} />
                <br></br>
                <label htmlFor="pPostContent">Write your post here: </label>
                <input name="pPostContent" value={this.state.post_contents.post_content} onChange={this.postcontentChange} />
                <br></br>
                <input type="button" value="Submit" onClick={this.update} />
                {/* <button onClick={this.update}>Update</button> */}
            </div>
        )
    }
}
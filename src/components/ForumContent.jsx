import React, { Component, Fragment } from 'react'

export default class ForumContent extends Component {

    removePost = () => {
        this.props.removePost(this.props.post.post_id);
    }

    // updatePost = () => {
    //     // this.props.removePost(this.props.state);
    //     this.props.updatePost(this.props.post.post_contents);
    //     // this.props.updatePost(this.props.post.post_id);
    // }

    // nametagChange = (ev) => {
    //     this.setState({ post_nametag: ev.target.value });
    // }

    // postContentChange = (ev) => {
    //     this.setState({ post_content: ev.target.value });
    // }

        render() {
        return (
            <Fragment>
                <tr className="forumBox">
                    <td><i>{this.props.post.post_nametag}</i></td>
                    <td>{this.props.post.post_content}</td>
                    <td><input type="button" value="📝" className="editB" onClick={this.updatePost} /></td>
                    <td><input type="button" value="delete" onClick={this.removePost} /></td>
                </tr>
            </Fragment>

        )
    }
}

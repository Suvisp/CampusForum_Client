import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Like from './Like'

export default class ForumContent extends Component {
    link = "";
    constructor(props) {
        super(props);
        this.link = "/forumEdit/" + props.post.post_id;
        this.state = {
        }
    }

    removePost = () => {
        this.props.removePost(this.props.post.post_id);
    }

    render() {
        return (
            <Fragment>
                <tr className="forumBox">
                    <td><i>{this.props.post.post_nametag}</i></td>
                    <td>{this.props.post.post_content}</td>
                    {/* <td><input type="button" value="📝" className="editB" onClick={this.updatePost} /></td> */}
                    <td><Link to={this.link}>Edit</Link></td>
                    <td><input type="button" value="delete" onClick={this.removePost} /></td>
                    <Like/>
                </tr>
            </Fragment>

        )
    }
}

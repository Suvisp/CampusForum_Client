import React, { Component, Fragment } from 'react'

export default class ForumContent extends Component {

    state = {
        post_id: 0,
        post_nametag: "",
        post_content: "",
        showEdit: false
    }

    nametagChange = (ev) => {
        this.setState({ post_nametag: ev.target.value });
    }

    postContentChange = (ev) => {
        this.setState({ post_content: ev.target.value });
    }

    editPost = async () => {
        await this.props.editPost(this.state)
        this.setState({ showEdit: false })
    }

    editState = () => {
        if (this.state.showEdit === false) {
            this.setState({ showEdit: true })
        } else {
            this.setState({ showEdit: false })
        }
    }

    box = () => {
        console.log(this.props.post_id)
    }

    render() {
        const { post_nametag, post_content, post_id } = this.props;
        const editBox = this.state.showEdit ? (
            <tr>
                <td className="forumBox" colSpan="4">
                    <input type="text" placeholder={post_nametag} value={this.state.post_nametag} onChange={this.nametagChange} />
                    <input type="text" placeholder={post_content} value={this.state.post_content} onChange={this.postContentChange} />
                    
                    <input type="button" value="edit" onClick={this.editPost} />
                </td>
            </tr>
        ) : null;
        return (
            <Fragment>
                <tr className="forumBox">
                    {/* <td><i>{this.props.post_nametag}</i></td>
                    <td>{this.props.post_content}</td> */}
                    <td><i>{post_nametag}</i></td>
                    <td>{post_content}</td>
                    <td><input type="button" value="📝" className="editB" onClick={this.editState}></input></td>
                    {/* <td><input type="checkbox" value="delete" onClick={this.deleteArray} /></td> */}
                </tr>
                {editBox}
            </Fragment>
        )
    }
}
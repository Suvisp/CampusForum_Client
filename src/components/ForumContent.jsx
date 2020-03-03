import React, { Component, Fragment } from 'react'

export default class ForumContent extends Component {

    state = {
        id: 0,
        nametag: "",
        post_content: "",
        showEdit: false
    }

    nametagChange = (ev) => {
        this.setState({ nametag: ev.target.value });
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
        console.log(this.props.id)
    }

    render() {
        const { nametag, post_content, id } = this.props;
        const editBox = this.state.showEdit ? (
            <tr>
                <td className="eBox" colSpan="4">
                    <input type="text" placeholder={nametag} value={this.state.nametag} onChange={this.nametagChange} />
                    <input type="text" placeholder={post_content} value={this.state.post_content} onChange={this.descriptionChange} />
                    
                    <input type="button" value="edit" onClick={this.editPost} />
                </td>
            </tr>
        ) : null;
        return (
            <Fragment>
                <tr className="tTitle">
                    <td><i>{nametag}</i></td>
                    <td>{post_content}</td>
                    <td><input type="button" value="📝" className="editB" onClick={this.editState}></input></td>
                    {/* <td><input type="checkbox" value="delete" onClick={this.deleteArray} /></td> */}
                </tr>
                {editBox}
            </Fragment>
        )
    }
}
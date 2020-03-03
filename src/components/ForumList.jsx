import React, { Component, Fragment } from 'react'
// import { Forum } from './ForumForm'
// import { Table } from 'react-bootstrap'
import ForumContent from './ForumContent'

export default class ForumList extends Component {
    state = { checked: false }

    render() {
        const { post_contents } = this.props;
        const checkAll = (event) => {
            if (event.target.checked === true) {
                console.log('click');
                this.setState({checked: true})
                // this.props.toDelete(this.props.id);
            } else {
                this.setState({checked: false})
                console.log('no click');
                // this.props.notToDelete(this.props.id);
            } 
        }

return (
    <Fragment>
        <table>
            <thead>
                <tr>
                    <th>Nametag</th><th>Post</th><th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {post_contents.map((p, index) => {
                    return <ForumContent post_nametag={p.post_nametag} post_content={p.post_content} post_id={p.post_id} key={p.post_id} checked={this.state.checked} editPost={this.props.editPost}/>
                })}
            </tbody>
        </table >
        {/* <input type="button" name="del" id="del" value="delete" onClick={this.deleteQuote} /> */}
    </Fragment>
)
}
}
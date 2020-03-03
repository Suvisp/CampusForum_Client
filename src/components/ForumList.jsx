import React, { Component } from 'react'
// import { Forum } from './ForumForm'
// import { Table } from 'react-bootstrap'
import ForumContent from './ForumContent'

export default class ForumList extends Component {
    state = { checked: false }

    render() {
  
        var postList = this.props.post_contents.map((p, ind) => {
            return (<ForumContent post_contents={p} key={p.id} />)
        })
        return (
            <table><tbody>{postList}</tbody></table>
        );
    }
}
import React, { Component } from 'react';

class Like extends Component {
    state = {
        post_count: 0
    }
    incrementMe = () => {
        let newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
      }

    render() {
        return (
            <div>
                <button onClick={this.incrementMe}>❤️ {this.state.count}</button> 
            </div>
        );
    }
}

export default Like;

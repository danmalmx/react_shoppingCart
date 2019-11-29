import React, { Component } from 'react'

export class Counter extends Component {
    state = {
        count: 0
    };

    render() {
        return (
        <React.Fragment>
            <span>{this.formatCount()}</span>
            <button>Increment</button>            
        </React.Fragment>
        );
    }
    formatCount() {
        const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>
}

}

export default Counter;

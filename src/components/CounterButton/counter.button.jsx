import React, { Component } from 'react'

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            counter: 1
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.counter !== nextState.counter) return true;
        return false;
    }

    updateCount = () => {
        this.setState(state => {
            return {counter: this.state.counter + 1}
        })
    }

    render() {
        return (
            <button color={this.props.color} onClick={this.updateCount} >Count: {this.state.counter} </button>
        )
    }
}

export default CounterButton;
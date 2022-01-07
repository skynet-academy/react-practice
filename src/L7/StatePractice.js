import React from 'react'

class StatePractice extends React.Component{
    // the constructor is a method builtin javascript
    constructor() {
        super()
        this.state = {
            answer : "No"
        }

    }
    render() {
        return(
            <div>
                <h1>It is important to you? {this.state.answer}</h1>
            </div>
        )
    }
}

export default StatePractice

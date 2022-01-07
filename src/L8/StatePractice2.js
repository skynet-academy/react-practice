import React from 'react'


class StatePractice2 extends React.Component{
    onOff = true 
    constructor(){
        super()
        this.state = {
            name : "Nicolas",
            age : 33,
            logged : false,
            number : 1,
        }
        this.changeState = this.changeState.bind(this)
        this.changeNumber = this.changeNumber.bind(this)
     }

    changeState () {
        this.setState(prevState =>{
            return{logged: !prevState.logged}})
    } 

    changeNumber () {
        this.setState(a => {
            return{ number: a.number + 1}
        })
    }

    render(){
        return(
            <div>
                <h1>Name: {this.state.name}</h1>
                <h3>Age: {this.state.age}</h3>
                <p>You are currently logged { this.state.logged ? "in" : "out"}</p>
                <label>Click to log {this.state.logged ? "out " : "in "}</label>
                <button onClick={this.changeState}>Click</button>
                <p>Number: {this.state.number}</p>
                <button onClick={this.changeNumber}>Increase</button>
            </div>
        )
    }
}

export default StatePractice2

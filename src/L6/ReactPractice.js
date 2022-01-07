import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class ReactPractice extends React.Component {
    render(){
        return(
            <div>
                <Header username="Nicolas" />
                <Greeting username="Nicolas" />
            </div>
        )
    }
} 


class Header extends React.Component {
    render(){
        return(
            <header>
                <p>Hello, I am {this.props.username}</p>
            </header>
        )
    }
}


class Greeting extends React.Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        if(hours < 12){
            timeOfDay = "Good morning"
        } else if(hours > 12 && hours < 18){
            timeOfDay = "Good afternoon"
        } else {
            timeOfDay = "Good night"
        }
        return(
            <h1>{timeOfDay} to you, {this.props.username}</h1>
        )
    }
}


export default ReactPractice



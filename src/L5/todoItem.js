//const TodoItem = (props) => {
//    return(
//        <div className="todo-list">
//            <input type="checkbox" checked={props.completed}/>
//            <label> {props.id} - {props.task}</label>
//        </div>
//    )
//}

import React from 'react'

class TodoItem extends React.Component {
    render(){
        return(
            <div className="todo-list">
                <input type="checkbox" checked={this.props.completed} />
                <label >{this.props.id} - {this.props.task}</label>
            </div>
        )
    }
}


export default TodoItem

import React from 'react'


class StatePractice3 extends React.Component{
    constructor(){
        super()
        this.state = {
            aNumber: 1,
        }
        this.incrNum = this.incrNum.bind(this)

    }


    incrNum() {
        this.setState(b => {
            return { aNumber: b.aNumber + 10}
        })

    }

    render(){
        return(
            <div>
                <label >Number 2: {this.state.aNumber}</label>
                <br />
                <button onClick={this.incrNum}>Click Me</button>
            </div>

        )
    }


}


export default StatePractice3

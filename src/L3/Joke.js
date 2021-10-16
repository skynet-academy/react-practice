const Joke = (props) => {
    return(
        <section>
            <label style={{display: !props.question && "none"}} >{props.question}</label>
            <br/>
            <label style={{backgroundColor: !props.question && "#888888"}}>answer: {props.punchline}</label>
            <hr/>
        </section>
    )
}

export default Joke

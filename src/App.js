import logo from './logo.svg'
import './App.css'
import Task1 from './L1/Task1'
import NavVar from './L2/NavVar'
import Joke from './L3/Joke'
import jokeData from './jokeData'
import Product from './L4/Product'
import products from './productSales'
import TodoItem from './L5/todoItem'
import todosData from './todosData'
import ReactPractice from './L6/ReactPractice'
import StatePractice from './L7/StatePractice'
import StatePractice2 from './L8/StatePractice2'
import StatePractice3 from './L9/StatePractice3'

//import Task6 from './L1/Task5.js'
//import Task7 from './L1/Task6.js'

const App = ()=>{
    const jokeComponents = jokeData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)

    const items = products.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description}  />) 

    const todos = todosData.map(todo => <TodoItem key={todo.id} id={todo.id} task={todo.task} completed={todo.completed}/>)

    return(
        <div>
            <NavVar />
            <Task1 />
            {jokeComponents}      
            <br/>
            {items}
            <br />
            {todos}
            <ReactPractice />
            <StatePractice />
            <StatePractice2 />
            <br />
            <StatePractice3 />
        </div>
    )
}


export default App;

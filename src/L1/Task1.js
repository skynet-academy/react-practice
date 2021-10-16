import Task1_2 from './Task1_2.js'

const Task1 = ({myVar}) => {
    const timer = () => {
        let time = new Date()
        let h = time.getHours().toString()
        let m = time.getMinutes().toString()
        let s = time.getSeconds().toString()
        let timeDisplay = document.getElementById("clock")
        if(h.length < 2){
            h = "0" + h
        }

        if(m.length < 2){
            m = "0" + m
        }
        
        if(s.length < 2){
            s = "0" + s
        }

        timeDisplay.innerHTML = h + ":" + m +  ":" + s
    }

    setInterval(timer, 1000)

    return(
        <div>
            <h1 id="clock"></h1>
            <p>This is the first practice</p>
            <ul>
                <li>Python</li>
                <li>Javascript</li>
                <li>C/C++</li>
            </ul>
            <Task1_2 />
        </div>
    )
}

export default Task1

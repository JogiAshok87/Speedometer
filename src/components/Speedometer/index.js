import {Component} from 'react'

import './index.css'



class Speedometer extends Component {

    state = {count : 0}
    onAccelerate = () =>{
        const {count} = this.state
        if (count < 200){
            this.setState((prevState) => ({count: prevState.count+10}))
        }
    }

    onBrake = () =>{
        const {count} = this.state
        if (count > 0){
            this.setState((prevState) => ({count : prevState.count-10}))

        }
    }

    render(){
        const {count} = this.state
        return (
            <div className="container">
                <h1 className="heading">SPEEDOMETER</h1>
                <img 
                src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" 
                className="speedometer" 
                alt="speedometer"/>
                <h2 className="heading2">Speed is {count}mph<h2>
                <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
                <div>
                    <button className="accButton" type="button" onClick={this.onAccelerate}>Accelerate</button>
                    <button className="brakeButton" type="button" onClick={this.onBrake}>Apply Brake</button>
                </div>
            </div>
        )
    }
}

export default Speedometer

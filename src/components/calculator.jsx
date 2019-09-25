import React from 'react';
import {Buttons} from "./buttons"


class Calculator extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            number: 0
        }
    } 
    onHandle (name) {
        
        let windowStr = "";
        let lastNumber = this.state.number 
        
        
       
        if (name === "=") {
            const sumNumber = eval(lastNumber);
            this.setState ({
                number: `${sumNumber.toFixed(2)}`
            })
        } else if (this.state.number === 0){
            if (name == ".") {
                this.setState ({
                    number: `0${name}`,
                })
            } else { 
                this.setState ({
                    number: name,
                })
            }
    
        } else if (name == "C") { 
            this.setState ({
                number: 0,
            })
            
        } else {
           
            windowStr = lastNumber + name;
             
            this.setState ({
                number: windowStr,
            })
        }
    } 

    

    render () {
        return (
        <div className="calculator"> 
            <div className="calculator__window">
                <p>
                    {this.state.number}
                </p>
            </div>
            <ul>
                {
                    Buttons.map (item => (
                        <li 
                            className="calculator--button" 
                            onClick={() => this.onHandle(item.name)} 
                            key = {item.id} >
                            {item.name}
                        </li>
                    )) 
                }
            </ul>
        </div>
        )
    }
}


export default Calculator;
import React, { Component } from 'react';
import calculatorImg from './calculator.png';

class Calculator extends Component {

    constructor() {
        super();

        this.state = {
            header: "This is a Calculator...",
            display: "0",
            operator: '',
            temp: 0,
            resetDisplay: false
        }
    }

    updateHeader(event){
        let value = event.target.value;
        this.setState({
            header: value
        });
    }

    onPressNum(num){
        var display;
        if(this.state.display === '0')
            display = num;
        else
            display = this.state.display + num;

        if(this.state.display.length < 13){
            this.setState({
                display: display
            });
        }
    }

    onPressClear(){
        this.setState({display: ""});
    }

    render() {
        return (
            <div id="calculator-container">
                {/* Updates the header as you type */}
                <input id="header-input" onChange={(event) => this.updateHeader(event)} />
                <h1 id="header"> { this.state.header } </h1>
                <img className="remove-highlight" src={calculatorImg} alt="calculator" />
                <div id="calculator-mask" className="remove-highlight">
                    <div className="output">
                        <span className="total"> { this.state.display } </span>
                    </div>

                    <div className="btn clear"  onClick =   {( click )  =>  this.onPressClear()}></div>

                    <div className="btn zero"   onClick =   {( click )  => this.onPressNum('0')}></div>
                    <div className="btn one"    onClick =   {( click )  => this.onPressNum('1')}></div>
                    <div className="btn two"    onClick =   {( click )  => this.onPressNum('2')}></div>
                    <div className="btn three"  onClick =   {( click )  => this.onPressNum('3')}></div>
                    <div className="btn four"   onClick =   {( click )  => this.onPressNum('4')}></div>
                    <div className="btn five"   onClick =   {( click )  => this.onPressNum('5')}></div>
                    <div className="btn six"    onClick =   {( click )  => this.onPressNum('6')}></div>
                    <div className="btn seven"  onClick =   {( click )  => this.onPressNum('7')}></div>
                    <div className="btn eight"  onClick =   {( click )  => this.onPressNum('8')}></div>
                    <div className="btn nine"   onClick =   {( click )  => this.onPressNum('9')}></div>

                    <div className="btn equal"></div>
                    <div className="btn multiply"></div>
                    <div className="btn divide"></div>
                    <div className="btn subtract"></div>
                    <div className="btn add"></div>
                </div>
            </div>
        )
    }
}

export default Calculator;
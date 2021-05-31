// This component will create an otp input line and set the value from parent component

import React, { useState, useEffect } from 'react';

import '../../css/OTPStyle.css';

const OTPInput = ({ setValue }) => {
    const [valueOne, setValueOne] = useState('');
    const [valueTwo, setValueTwo] = useState('');
    const [valueThree, setValueThree] = useState('');
    const [valueFour, setValueFour] = useState('');
    const [valueFive, setValueFive] = useState('');
    const [valueSix, setValueSix] = useState('');

    const updateValue = (elem, child) => {
        let e = elem.target.value;
        let activeChild = document.querySelector(`#${child}`)
        
        if (isNaN(e)){
            activeChild.value = '';
            activeChild.focus();
        }else{
            switch(child){
                case 'value_one':
                    if (e === valueOne){
                        setValueOne('');
                    }else{
                        setValueOne(e);
                        activeChild.nextElementSibling.focus();
                    }
                    break;

                case 'value_two':
                    if (e === valueTwo){
                        setValueTwo('');
                        activeChild.previousElementSibling.focus();
                    }else{
                        setValueTwo(e);
                        activeChild.nextElementSibling.focus();
                    }
                    break;

                case 'value_three':
                    if (e === valueThree){
                        setValueThree('');
                        activeChild.previousElementSibling.focus();
                    }else{
                        setValueThree(e);
                        activeChild.nextElementSibling.focus();
                    }
                    break;

                case 'value_four':
                    if (e === valueFour){
                        setValueFour('');
                        activeChild.previousElementSibling.focus();
                    }else{
                        setValueFour(e);
                        activeChild.nextElementSibling.focus();
                    }
                    break;

                case 'value_five':
                    if (e === valueFive){
                        setValueFive('');
                        activeChild.previousElementSibling.focus();
                    }else{
                        setValueFive(e);
                        activeChild.nextElementSibling.focus();
                    }
                    break;

                case 'value_six':
                    if (e === valueSix){
                        setValueSix('');
                        activeChild.previousElementSibling.focus();
                    }else{
                        setValueSix(e);
                    }
                    
                    let otpValue = `${valueOne}${valueTwo}${valueThree}${valueFour}${valueFive}${e}`;

                    otpValue = parseInt(otpValue);
                    return setValue(otpValue);
                
                default:
                    console.log('Empty string provided');
            }
        }
    }

    return (
        <div className="otp">
            <div className="otp__inputContain">
                <input type="text" maxLength="1" id="value_one" value={valueOne} onChange={e => updateValue(e, 'value_one')} />
                <input type="text" maxLength="1" id="value_two" value={valueTwo} onChange={e => updateValue(e, 'value_two')} />
                <input type="text" maxLength="1" id="value_three" value={valueThree} onChange={e => updateValue(e, 'value_three')} />
                <input type="text" maxLength="1" id="value_four" value={valueFour} onChange={e => updateValue(e, 'value_four')} />
                <input type="text" maxLength="1" id="value_five" value={valueFive} onChange={e => updateValue(e, 'value_five')} />
                <input type="text" maxLength="1" id="value_six" value={valueSix} onChange={e => updateValue(e, 'value_six')} />
            </div>
        </div>
    )
}

export default OTPInput

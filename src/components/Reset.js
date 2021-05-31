import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useStateValue } from '../contextAPI/StateProvider';

import OTPInput from './form_parts/OTPInput';

import swal from 'sweetalert';
import ScaleLoader from "react-spinners/ScaleLoader"

const Reset = () => {
    const history = useHistory();
    const [{ user, images, API_URL }, dispatch] = useStateValue();
    const [values, setValues] = useState({email: '', otp: '', oldpasswd: '', newpasswd: '', cpasswd: ''});
    const [validating, setValidating] = useState(false);
    const [formStage, setFormStage] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formOne, setFormOne] = useState(false);
    const [formTwo, setFormTwo] = useState(false);
    const [formThree, setFormThree] = useState(false);
    const [formFour, setFormFour] = useState(false);
    const [responseAnimation, setResponseAnimation] = useState('');

    const [btnText, setBtnText] = useState('Continue');

    const clearForm = () => {
        setFormOne(false);
        setFormTwo(false);
        setFormThree(false);
        setFormFour(false);
    }

    const reset = (e) => {
        setValidating(true);
        e.preventDefault();

        if (formStage === 0){
            // Send OTP to client email address
            setTimeout(() => {
                setValidating(false);

                clearForm();
                setFormStage(1);
                setBtnText('Verify');
                setFormTwo(true);
            }, 2000);
        }
        if (formStage === 1){
            // User is not logged in
            // Confirm OTP
            setTimeout(() => {
                setValidating(false);

                clearForm();
                setFormStage(3);
                setBtnText('Reset');
                setFormFour(true);
            }, 2000);
        }
        if (formStage === 2){
            // User is logged in
            // Confirm Password
            setTimeout(() => {
                setValidating(false);

                clearForm();
                setFormStage(3);
                setBtnText('Reset');
                setFormFour(true);
            }, 2000);
        }
        if (formStage === 3){
            // Submit form (Reset password)
            
            setTimeout(() => {
                setValidating(false);

                clearForm();
                setFormSubmitted(true);
                setSubmitSuccess(true);
                // console.log(values);
            }, 2000);
        }
    }

    const setOTP = otpInput => {
        console.log(otpInput);
        setValues({...values, otp: otpInput});
    }

    useEffect(() => {
        if (user !== null){
            setFormStage(2);
            setFormThree(true);
        }else{
            setFormOne(true);
        }
    }, [])

    useEffect(() => {

        if (formSubmitted){
            if (submitSuccess){
                setResponseAnimation(swal({
                    title: 'Success',
                    text: 'Password reset successful!',
                    icon: 'success',
                    className: 'success__note',
                    button: {text: 'Ok'}
                }).then(() => {
                    window.location = "/";
                }));
            }else{
                setResponseAnimation(swal({
                    title: 'Failed',
                    text: 'Password reset failed!',
                    icon: 'error',
                    className: 'error__note',
                    button: {text: 'Retry'}
                }).then(() => {
                    window.location = "/reset";
                }));
            }
        }
    }, [submitSuccess])

    return (
        <div className="processor">
            <div className="signup contain">
                <header className="signup__header">
                    <nav className="signup__headerNav">
                        <img onClick={() => window.location.assign('http://probityvest.com')} src={images.logo_white} alt="" className="logo" />
                    </nav>
                </header>
                <main className="signup__main">
                    <section className="signup__formContain">
                        {
                            formSubmitted ? (
                                <div className="form__response">
                                    <div className="form__success">
                                        {
                                            responseAnimation
                                        }
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={ e => reset(e) } className="processor__formContain">
                                    {
                                        formOne && (
                                            <div className="switch__contain">
                                                <h1>Reset</h1>
                                                <p className="redirect_paragraph">Provide a registered email to continue.</p>
                                                <div className="formbox__formRow fullColumn">
                                                    <div className="formbox__formColumn">
                                                        <input name="email" type="email" value={ values.email } onChange={e => setValues({...values, email: e.target.value})} required />
                                                        <label htmlFor="email">Email</label>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        formTwo && (
                                            <div className="switch__contain">
                                                <h1>One Time Password</h1>
                                                <p className="redirect_paragraph">A mail containing a One Time Password (OTP) has been sent to your address. Please provide below.</p>
                                                <div className="formbox__formRow fullColumn">
                                                    <div className="formbox__formColumn">
                                                        <OTPInput setValue={setOTP} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        formThree && (
                                            <div className="switch__contain">
                                                <h1>One Time Password</h1>
                                                <p className="redirect_paragraph">A mail containing a One Time Password (OTP) has been sent to your address. Please provide below.</p>
                                                <div className="formbox__formRow fullColumn">
                                                    <div className="formbox__formColumn">
                                                        <input name="oldpasswd" type="password" value={ values.oldpasswd } onChange={e => setValues({...values, oldpasswd: e.target.value})} required />
                                                        <label htmlFor="oldpasswd">Old Password</label>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        formFour && (
                                            <div className="switch__contain">
                                                <h1>Change Password</h1>
                                                <p className="redirect_paragraph">Provide a new password and confirm.</p>
                                                <div className="formbox__formRow fullColumn">
                                                    <div className="formbox__formColumn">
                                                        <input name="newpasswd" type="password" value={ values.newpasswd } onChange={e => setValues({...values, newpasswd: e.target.value})} required />
                                                        <label htmlFor="newpasswd">New Password</label>
                                                    </div>
                                                </div>
                                                <div className="formbox__formRow fullColumn">
                                                    <div className="formbox__formColumn">
                                                        <input name="cpasswd" type="password" value={ values.cpasswd } onChange={e => setValues({...values, cpasswd: e.target.value})} required />
                                                        <label htmlFor="cpasswd">Confirm Password</label>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className="formbox__formRow btnContain">
                                            {
                                                validating ? (
                                                    <div className="btnBox">
                                                        <button type="button" className="btn btn__primary">
                                                            <ScaleLoader color="#fff" size={10} height={12} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="btnBox">
                                                        <button type="submit" className="btn btn__primary">
                                                            <span>{ btnText }</span>
                                                        </button>
                                                    </div>
                                                )
                                            }
                                    </div>
                                    <p className="redirect_paragraph pointer" onClick={() => history.goBack()}><strong>cancel</strong></p>
                                </form>
                            )
                        }
                    </section>
                </main>
                <footer>
                    <p>All rights reserved. &copy;2021 Probityvest Inc.</p>
                </footer>
            </div>
        </div>
    )
}

export default Reset

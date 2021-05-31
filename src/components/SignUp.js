import React, { useState, useEffect } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { useStateValue } from '../contextAPI/StateProvider';

import ScaleLoader from "react-spinners/ScaleLoader"

import '../css/SignUp.css';

const SignUp = () => {
    const { referrer } = useParams();
    const [{ user, images, API_URL }, dispatch] = useStateValue();
    const [values, setValues] = useState({f_name: '', l_name: '', username: '', phone: '', email: '', passwd: '', cpasswd: '', referrer: 'null'});
    const [agree, setAgree] = useState(false);
    const [validating, setValidating] = useState(false);

    const signUp = (e) => {
        setValidating(true);
        e.preventDefault();
        console.log(values);

        setTimeout(() => {
            setValidating(false);
        }, 2000);
    }

    useEffect(() => {
        setValues({...values, referrer: referrer});
    }, [])

    return (
        <div className="processor">
            {
                user === null ? (
                    <div className="signup contain">
                        <header className="signup__header">
                            <nav className="signup__headerNav">
                                <img onClick={() => window.location.assign('http://probityvest.com')} src={images.logo_white} alt="" className="logo" />
                            </nav>
                        </header>
                        <main className="signup__main">
                            <section className="signup__formContain">
                                <form onSubmit={ e => signUp(e) } className="processor__formContain">
                                    <h1>Sign Up</h1>
                                    <div className="formbox__formRow splitColumn">
                                        <div className="formbox__formColumn">
                                            <input name="fname" type="text" value={ values.fname } onChange={e => setValues({...values, fname: e.target.value})} required />
                                            <label htmlFor="fname">First Name</label>
                                        </div>
                                        <div className="formbox__formColumn">
                                            <input name="lname" type="text" value={ values.lname } onChange={e => setValues({...values, lname: e.target.value})} required />
                                            <label htmlFor="lname">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="formbox__formRow splitColumn">
                                        <div className="formbox__formColumn">
                                            <input name="phone" type="text" value={ values.phone } onChange={e => setValues({...values, phone: e.target.value})} required />
                                            <label htmlFor="phone">Contact Phone</label>
                                        </div>
                                        <div className="formbox__formColumn">
                                            <input name="username" type="text" value={ values.username } onChange={e => setValues({...values, username: e.target.value})} required />
                                            <label htmlFor="username">Username</label>
                                        </div>
                                    </div>
                                    <div className="formbox__formRow fullColumn">
                                        <div className="formbox__formColumn">
                                            <input name="email" type="email" value={ values.email } onChange={e => setValues({...values, email: e.target.value})} required />
                                            <label htmlFor="email">Valid Email</label>
                                        </div>
                                    </div>
                                    <div className="formbox__formRow splitColumn">
                                        <div className="formbox__formColumn">
                                            <input name="passwd" type="password" value={ values.passwd } onChange={e => setValues({...values, passwd: e.target.value})} required />
                                            <label htmlFor="passwd">Password</label>
                                        </div>
                                        <div className="formbox__formColumn">
                                            <input name="cpasswd" type="password" value={ values.cpasswd } onChange={e => setValues({...values, cpasswd: e.target.value})} required />
                                            <label htmlFor="cpasswd">Confirm Password</label>
                                        </div>
                                    </div>
                                    <div className="formbox__formRow fullColumn">
                                        <div className="formbox__formColumn">
                                            <input name="referrer" type="text" value={ values.referrer } onChange={e => setValues({...values, referrer: e.target.value})} required />
                                            <label htmlFor="referrer">Referrer (Optional)</label>
                                        </div>
                                    </div>
                                    <div className="formbox__formRow checkBox">
                                        <input type="checkbox" id="agreed" onChange={() => setAgree(!agree)} />
                                        <label htmlFor="agreed">Please agree to our <strong>Tearms of Use</strong> and <strong>Privacy Policy</strong> to complete this process.</label>
                                    </div>
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
                                                        <span>SIgn Up</span>
                                                    </button>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <p className="redirect_paragraph">Already own a portfolio on this platform? <Link to="/"><strong>Login now.</strong></Link></p>
                                </form>
                            </section>
                        </main>
                        <footer>
                            <p>All rights reserved. &copy;2021 Probityvest Inc.</p>
                        </footer>
                    </div>
                ) : (
                    <Redirect to={{ pathname: "/dashboard" }} />
                )
            }
        </div>
    )
}

export default SignUp

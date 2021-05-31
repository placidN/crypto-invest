import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useStateValue } from '../contextAPI/StateProvider';

import ScaleLoader from "react-spinners/ScaleLoader"

const Login = () => {
    const [values, setValues] = useState({username: '', passwd: ''});
    const [{ user, images, AssetObj, API_URL }, dispatch] = useStateValue();
    const [validating, setValidating] = useState(false);
    
    const logIn = (e) => {
        setValidating(true);
        e.preventDefault();

        setTimeout(() => {
            setValidating(false);
        }, 2000);
    }

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
                                <form onSubmit={ e => logIn(e) } className="processor__formContain">
                                    <h1>Login</h1>
                                    <div className="formbox__formRow fullColumn">
                                        <div className="formbox__formColumn">
                                            <input name="username" type="text" value={ values.username } onChange={e => setValues({...values, username: e.target.value})} required />
                                            <label htmlFor="username">Username</label>
                                        </div>
                                    </div>
                                    <div className="formbox__formRow fullColumn">
                                        <div className="formbox__formColumn">
                                            <input name="passwd" type="password" value={ values.passwd } onChange={e => setValues({...values, passwd: e.target.value})} required />
                                            <label htmlFor="passwd">Password</label>
                                        </div>
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
                                                        <span>Login</span>
                                                    </button>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <p className="redirect_paragraph">Forgot your password? <Link to="/reset"><strong>reset password here.</strong></Link></p>
                                    <p className="redirect_paragraph">New here? <Link to="/signup"><strong>sign up.</strong></Link></p>
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

export default Login

import React, { useState } from 'react';

// login component
const Loginform = (props) => {
    return (
        <div className='form'>
            <form>
                <fieldset>
                    <legend>Login form</legend>
                    <div className='row'>
                        <label htmlFor="user">username</label>
                        <input type="text" name='usser' id='user' required />
                    </div>
                    <div className='row'>
                        <label htmlFor="pass">Password</label>
                        <input type="password" name='pass' id='pass' required />
                    </div>
                    <div className='row'>
                        <input type="submit" value="login" className='btn' />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
// register component
const RegisterForm = (props) => {
    return (
        <div className='form'>
            <form>
                <fieldset>
                    <legend>Login form</legend>
                    <div className='row'>
                        <label htmlFor="user">username</label>
                        <input type="text" name='user' id='user' required />
                    </div>
                    <div className='row'>
                        <label htmlFor="pass">Password</label>
                        <input type="password" name='pass' id='pass' required />
                    </div>
                    <div className='row'>
                        <input type="submit" value="register" className='btn' />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
const Ex6 = (props) => {
    // const [state,handler]=userState(initial value)
    const [view, setView] = useState(false)

    const toggle = () => {
        if (view) {
            setView(false) /* register */
        } else {
            setView(true) /* Login */
        }
    }
    return (
        <div>
            <h3>State handler</h3>
            <button onClick={toggle} className='btn'>{view ? "Register" : "Login"}</button>
            <section>
                {
                    view ? <Loginform /> : <RegisterForm />
                }
            </section>
        </div>
    )
}
export default Ex6
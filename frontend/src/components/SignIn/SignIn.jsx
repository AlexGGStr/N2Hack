import React from 'react'
import './SignIn.css';

import { FacebookLoginButton } from 'react-social-login-buttons'
import { LoginSocialFacebook } from 'reactjs-social-login'

const SignIn = ({getPage, setCurrentPage, setEmail, setPassword}) => {
    return (
        <article className="br5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw8 shadow-5 center">
            <main className="pa4 black-120">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw7 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw7 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw7 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                    <LoginSocialFacebook
                        className='facebook-login-btn'
                        appId='926541521681205'
                        onResolve={(response) => {
                            console.log(response.data)
                        }}
                        onReject={(error) => {
                            console.log(error)
                        }}
                    >
                        <FacebookLoginButton />
                    </LoginSocialFacebook>
                {/* <button onClick={getPage()}>Buton Demo</button> */}
                </form>
            </main>
        </article>
    )
}

export default SignIn
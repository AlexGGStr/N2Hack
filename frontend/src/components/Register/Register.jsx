import React from 'react'

const Register = ({setPassword, setEmail, setCurrentPage, setUsername}) => {
  return (
    <article className="br5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw8 shadow-5 center">
        <main className="pa4 black-80">
            <form className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6">Username</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username" onChange={(e) => {setUsername(e.target.value)}}/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                </fieldset>
                <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Next" onClick={()=>{ setCurrentPage('pickformtype')}}/>
                </div>
                <div className="lh-copy mt3">
                </div>
            </form>
        </main>
    </article>
  )
}

export default Register
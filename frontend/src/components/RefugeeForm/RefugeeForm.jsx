import React from 'react'
import './RefugeeForm.css'

const RefugeeForm = ({setLastName, setFirstName, setCurrentPage}) => {
  return (
    <div className='refugee-form'>
        <article className="br5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw8 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Enter Your Name</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" >First Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="first-name"  id="first-name" onChange={(e) => {setFirstName(e.target.value)}}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Last Name</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="last-name"  id="last-name" onChange={(e) => {setLastName(e.target.value)}}/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Next"/>
                    </div>
                    <div className="lh-copy mt3">
                    </div>
                </form>
            </main>
        </article>
    </div>
  )
}

export default RefugeeForm
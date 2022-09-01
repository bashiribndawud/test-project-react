import React, {useState} from 'react'
import './chat.css'

export const Login = ({handleChange}) => {
const [username, setusername] = useState('')
const handleSubmit = ()=>{
    handleChange(username)
}
  return (
    <div>
        <div class="container">
        <div class="header">
          <div class="grp-info">
            <h3 class="grp-name">Login</h3>
            <p class="grp-status">Log in to the chat room</p>
          </div>
        </div>
        <div class="chatbox center">
            <input placeholder='username' className='form-control' onChange={(evt) => setusername(evt.target.value)} />
            <button onClick={() => handleSubmit()} className='btn'>Login</button>
        </div>

        </div>
    </div>
  )
}

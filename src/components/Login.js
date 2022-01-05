import React from 'react'
import { useState } from 'react'
import '../css_files/login.css'
import { authenticatelogin } from '../service/api'
import {

    Link,

} from "react-router-dom";

const logininitialvalue = {

    email: '',
    password: ''

}

export default function Login() {
    const [login, setLogin] = useState(logininitialvalue)
    const [error, setError] = useState(false)
    const [account, setAccount] = useState(false)

    const onvaluechange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
        console.log(login)
    }
    const handlelogin = async () => {
        let response = await authenticatelogin(login)
        if (!response) {
            setError(true)
        }
        else {
            setError(false);
            setAccount(true)


        }

    }
    return (
        <div>

            <div >
           
                <div style={{ marginTop: 79 }}>

                    

                    <div class="mb-3 my-3" style={{marginTop : 50}}>
                        {/* <label  >Email address</label> */}
                        <input type="email" name='email' required='true' onChange={(e) => { onvaluechange(e) }} placeholder='Enter Email' />

                    </div>
                    <div class="mb-3 my-3">
                        {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                        <input type="password" name='password' required='true' onChange={(e) => { onvaluechange(e) }} placeholder='Enter Password' />
                    </div>

                    <button type="submit" className="btn btn-primary my-3" onClick={() => { handlelogin() }}>Login</button>
                    <div>

                    </div>
                    <Link to='/signup'>   <button type="submit" className="btn btn-warning" style={{ textDecoration: 'none' }}>  SignUp!</button> </Link>
                    {
                        error && <div className="alert alert-primary alert"  role="alert">
                           Invalid Login Details
                        </div>
                    }
                    {
                        account && <div className="alert alert-primary alert" role="alert">
                            Hi, you are logged in!
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

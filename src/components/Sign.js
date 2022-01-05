import React from 'react';
import '../css_files/home.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { authenticatesignup } from '../service/api';

const signupinitialvalue = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
}
export default function Sign() {
    const [signup, setSignup] = useState(signupinitialvalue)
   const history = useHistory()

   
    const signupNow = async()=>{
        
        const response  = await authenticatesignup(signup)
        

        if(!response) return;
        history.push('/home')
        
    }
    const onInputchange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
        console.log(signup)
    }
    return (
        <div style={{ display: 'flex' }} >
            <div className='main'> </div>
            <div className='content' >
                <div style={{ marginTop: '20%' }}>
                    <span className='heading' >Sign up</span>
                    <div style={{ marginTop: 79 }}>
                        <div class="mb-3 my-3">
                            {/* <label  >Email address</label> */}
                            <input type="email" name=' first_name' autoComplete='on' onChange={(e) => onInputchange(e)} required='true' placeholder='Enter FirstName' />

                        </div>
                        <div class="mb-3 my-3">
                            {/* <label  >Email address</label> */}
                            <input type="email" name='last_name' autoComplete='on' onChange={(e) => onInputchange(e)} required='true' placeholder='Enter LastName' />

                        </div>
                        <div class="mb-3 my-3">
                            {/* <label  >Email address</label> */}
                            <input type="email" name='email' autoComplete='on' onChange={(e) => onInputchange(e)} required='true' placeholder='Enter Email' />

                        </div>
                        <div class="mb-3 my-3">
                            {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                            <input type="password" name='password' autoComplete='on' onChange={(e) => onInputchange(e)} required='true' placeholder='Enter Password' />
                        </div>

                        <button type="submit" onClick={()=>{signupNow()}} className="btn btn-primary my-3" >Signup!</button>
                        <div>

                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}

import React from 'react'
import '../css_files/home.css'
import Login from './Login'
export default function Home() {
    return (
        <div style={{ display: 'flex' }} >
            <div className='main'> </div>
            <div className='content' >
                <div style={{ marginTop: '20%' }}>
            <span className='heading' >Login To Continue</span>

                

                    <Login />
                </div>

            </div>

        </div>
    )
}

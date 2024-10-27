import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                <h3>Welcome <Link to={'/login'} >Login</Link> to Continue</h3>
            </div>
        </>
    )
}

export default Home
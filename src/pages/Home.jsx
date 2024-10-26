import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                <Link to={'/my-profile'}>
                    <button className='btn btn-outline-success'>View My Profile</button>
                </Link>
                <Link to={'/all-users'}>
                    <button className='btn btn-outline-success ms-2'>View All Users</button>
                </Link>
            </div>
        </>
    )
}

export default Home
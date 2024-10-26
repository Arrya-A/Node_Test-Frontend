import React from 'react'

const MyProfile = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className="container">
                <h4>My Profile</h4>
                <table className='table'>

                    <tr>
                        <th>Field</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <th>Id</th>
                        <td>userid</td>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <td>userid</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>userid</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>userid</td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td>userid</td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>userid</td>
                    </tr>

                </table>
            </div>
        </div>
    )
}

export default MyProfile
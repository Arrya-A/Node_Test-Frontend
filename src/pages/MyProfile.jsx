import React, { useEffect, useState } from 'react'
import { myProfileAPI } from '../services/allAPI';

const MyProfile = () => {
    const [userProfile, setUserProfile] = useState();

    const myProfile = async () => {
        const token = sessionStorage.getItem("token");
        if (token) {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
            try {
                const result = await myProfileAPI(reqHeader);
                if (result.status === 200) {
                    setUserProfile(result.data);
                } else {
                    console.log(result.response.data);
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    useEffect(() => {
        myProfile();
    }, []);

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className="container">
                <h4>My Profile</h4>
                <table className='table'>
                    userProfile&&(
                    <tr>
                        <th>Field</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <th>Id</th>
                        <td>{userProfile.user._id}</td>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <td>{userProfile.firstname}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{userProfile.lastname}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{userProfile.email}</td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td>{userProfile.password}</td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>{userProfile.phone}</td>
                    </tr>
                    )



                </table>
            </div>
        </div>
    )
}

export default MyProfile
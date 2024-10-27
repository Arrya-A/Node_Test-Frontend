import React, { useEffect, useState } from 'react'
import { allUsersAPI } from '../services/allAPI'

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([])


  const getAllUsers = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await allUsersAPI(reqHeader)
        console.log(result)
        if (result.status === 200) {
          setAllUsers(result.data)
        } else {
          console.log(result.response.data)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }



  useEffect(() => {
    getAllUsers()
  }, [])
  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className="container">
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.length > 0 && (
                allUsers.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
                ))
              )
                
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AllUsers
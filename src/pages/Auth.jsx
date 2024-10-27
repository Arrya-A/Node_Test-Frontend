import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI'

const Auth = ({ insideRegister }) => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({ firstname: "", lastname: "", phone: "", email: "", password: "" })
    console.log(userData);

    const handleRegister = async (e) => {
        e.preventDefault()
        // console.log("inside handle register");

        if (userData.firstname && userData.lastname && userData.phone && userData.email && userData.password) {
            // console.log("before api call");
            //api call
            try {
                const result = await registerAPI(userData)
                console.log(result);

                if (result.status == 200) {

                    alert(`Welcome ${result?.data?.firstname}. Please login`)
                    setUserData({ firstname: "", lastname: "", phone: "", email: "", password: "" })
                    navigate('/login')
                } else {
                    if (result.response.status == 406) {
                        alert(result.response.data)
                        setUserData({ firstname: "", lastname: "", phone: "", email: "", password: "" })
                    }
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            alert("Please fill the form completely")
        }
    }

    const handleLogin = async(e)=>{
        e.preventDefault()
        if(userData.email && userData.password){
            //api call
            try{
                const result=await loginAPI(userData)
                console.log(result);
                
                if(result.status==200){
                    sessionStorage.setItem("user",JSON.stringify(result.data.user))
                    sessionStorage.setItem("token",result.data.token)
                    setUserData({ firstname: "", lastname: "", phone: "", email: "", password: "" })
                    navigate('/dashboard')
                }else{
                    if(result.response.status==404){
                        alert(result.response.data)
                    }

                }
            }catch(err){

            }
        }else{
            alert("Please fill the form completely")

        }
    }



    return (
        <div className='d-flex justify-content-center align-items-center rounded shadow' style={{ height: '100vh', width: '100%' }}>
            <div className='container d-flex justify-content-center align-items-center'>
                <div className="card shadow p-5 w-50 ">
                    <h4 className='fw-bolder mb-3 text-center'>
                        SIGN {insideRegister ? "UP" : "IN"}
                    </h4>
                    <Form>
                        {
                            insideRegister &&
                            <>
                                <FloatingLabel controlId="floatingInputFirstName" label="Firstname" className="mb-3" >
                                    <Form.Control value={userData.firstname} onChange={e => setUserData({ ...userData, firstname: e.target.value })} type="text" placeholder="firstname" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInputLastName" label="Lastname" className="mb-3" >
                                    <Form.Control value={userData.lastname} onChange={e => setUserData({ ...userData, lastname: e.target.value })} type="text" placeholder="lastname" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInputPhone" label="Phone" className="mb-3" >
                                    <Form.Control value={userData.phone} onChange={e => setUserData({ ...userData, phone: e.target.value })} type="text" placeholder="phone" />
                                </FloatingLabel>
                            </>
                        }
                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
                            <Form.Control value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} type="password" placeholder="Password" />
                        </FloatingLabel>

                        {insideRegister ?
                            <div className="mt-3 text-center">
                                <button onClick={handleRegister} className='btn btn-primary mb-2'>Register</button>
                                <p>Already have an account? Click here to <Link to={'/login'}>Login</Link></p>
                            </div>
                            :
                            <div className="mt-3  text-center">
                                <button onClick={handleLogin} className='btn btn-primary mb-2'>Login</button>
                                <p>New User? Click here to <Link to={'/register'}>Register</Link></p>
                            </div>
                        }
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Auth
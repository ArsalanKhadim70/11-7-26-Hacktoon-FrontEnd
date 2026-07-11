// import React from 'react';

// const SignUp = () => {
//     return (
//         <div>
//             <h1> SignUp Screen </h1>
//         </div>
//     );
// };

// export default SignUp;



import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit'
import "./app.css"
import axios from 'axios'
import Swal from "sweetalert2"

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const navigate = useNavigate();

    const registerApiHandler = async () => {
        try {
            const apiurl = "http://localhost:4098/api/user/register"
            const res = await axios({
                method: "POST",
                url: apiurl,
                data: {
                    userName: name,
                    userEmail: email,
                    userPass: pass
                }
            })
            console.log(res)
            
            Swal.fire({
                title: 'Success!',
                text: res.data.message || "Registration successful!",
                icon: 'success',
                background: '#1e1e1e', // Force dark background if not using dark css
                color: '#fff'
            })
            // alert(res.data.message || "Registration successful!")
            navigate('/login');

        } catch (error) {
            console.log("Something went wrong...!")
            const errorMessage = error.response?.data?.message || "Something went wrong!";

            Swal.fire({
                title: 'Error!',
                text: errorMessage,
                icon: 'error',
                background: '#1e1e1e',
                color: '#fff'
            });
        }

    }
    const fetchApiHandler = async () => {
        const apiurl = "http://localhost:4098/api/user/Fetch"
        const responsive = await axios({
            method: "GET",
            url: apiurl
        })
        console.log(responsive)
    }

    useEffect(() => {
        fetchApiHandler()
    }, [])


    return (
        <MDBContainer className="my-5 gradient-form">

            <MDBRow>

                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column ms-5">

                        <div className="text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                style={{ width: '185px' }} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                        </div>

                        <p>Please login to your account</p>


                        <MDBInput
                            wrapperClass='mb-4'
                            label='Name'
                            id='formName'
                            type='text'
                            placeholder='Write your Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />

                        <MDBInput
                            wrapperClass='mb-4'
                            label='Email address'
                            id='formEmail'
                            type='email'
                            placeholder='Write your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <MDBInput
                            wrapperClass='mb-4'
                            label='Password'
                            id='formPass'
                            type='password'
                            placeholder='Write your Password'
                            value={pass}
                            onChange={(e) => setPass(e.target.value)} />


                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={() => registerApiHandler()}>Register Now</MDBBtn>
                            <a className="text-muted" href="#!">Forgot password?</a>
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">Already have an account?</p>
                            <a href="/login"><MDBBtn outline className='mx-2' color='danger'>
                                Login
                            </MDBBtn></a>
                        </div>

                    </div>

                </MDBCol>

                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 className="mb-4">We are more than just a company</h4>
                            <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                    </div>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default SignUp;



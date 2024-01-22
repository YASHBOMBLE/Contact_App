import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import './Signup.css'
import './../Login/Login.css'
function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')

    const [role, setRole] = useState('user')

    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }
    async function signupUser() {


        const response = await axios.post('/signup', {
            name: name,
            email: email,
            phone: phone,
            password: password,
            cpassword: cpassword,
            role: role
        })



        console.log(response.data)
        if (response.data.success) {
            await swal({
                title: "Success",
                text: response.data.message,
                icon: "success",
                button: "Aww yiss!",
            });

            window.location.href = '/login'
            const result = await axios.post('/sendmail', {
                mailId: email
            })

        }
        else {
            swal({
                title: "Error",
                text: response.data.message,
                icon: "error",
                button: "Try Again!",
            });
            setName('')
            setEmail('')
            setPhone('')
            setPassword('')
            setCpassword('')
        }
    }
    return (
        <div>
            <div className='row'>
                <div className='col-md-12 main-info-container'>
                    <div className='form-container'>
                        <div className='form-title'>
                            Signup
                        </div>
                        <hr />
                        <form>
                            <div>
                                <label htmlFor='name'>Name: </label>
                                <input type='text' id='name' placeholder='Name' className='user-input'
                                    value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor='phone'>Phone: </label>
                                <input type='text' id='phone' placeholder='Phone' className='user-input'
                                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor='email'>Email: </label>
                                <input type='email' id='email' placeholder=' Email' className='user-input'
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <label for="password">Password:</label>
                            <div class="input-container">
                                <input type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className='user-input' placeholder=' Password' id="password" name="password" />
                                <i class="btn text-pass" onClick={handleShow}>{show ? "Hide" : "Show"}</i>
                            </div>

                            <label for="password">Conform Password:</label>
                            <div class="input-container">
                                <input type={show ? "text" : "password"} value={cpassword} onChange={(e) => setCpassword(e.target.value)} className='user-input' placeholder=' Password' id="password" name="password" />
                                <i class="btn text-pass" onClick={handleShow}>{show ? "Hide" : "Show"}</i>
                            </div>


                            <div>






                            </div>



                            <div>
                                <button type='button' className='signup-button' onClick={signupUser}>Signup &nbsp;<i class="fa-solid fa-user-plus"></i></button>

                            </div>
                            <hr />
                            <span className=' login-link'>
                                <Link to='/login' className='' >Already have an account Login</Link>
                            </span>
                        </form>

                    </div>
                </div>

                <div className='col-md-4'>
                </div>
            </div>
        </div>
    )
}

export default Signup
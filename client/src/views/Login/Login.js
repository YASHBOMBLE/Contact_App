import React from 'react'
import './Login.css'
function Login() {
  function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const handleShow = () => {
      setShow(!show)
    }
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <div class="container">
              <h2 className='login-page-text'>Login Here To continue</h2>

            </div>

          </div>
        </div>
        <hr />

        <div className='row m-1 size-form-container'>
          <div className='col-md-4'>

          </div>
          <div className='col-md-4'>
            <div className='login-form-container'>
              <div className='form-container main-form-container mt-3 '>
                <form>
                  <div className='form-title' >
                    Login
                    <hr />
                  </div>
                  <div>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' id='email' placeholder='Email' className='user-input'
                      value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>


                  <div>





                    <label for="password">Password:</label>
                    <div class="input-container">
                      <input type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className='user-input' placeholder=' Password' id="password" name="password" />
                      <i class="btn text-pass" onClick={handleShow}>{show ? "Hide" : "Show"}</i>
                    </div>


                  </div>

                  <div>
                    <hr />
                    <button type='button' className='login-button' onClick={loginUser}>Login</button>
                    <hr />
                    <span className='signup-form-link'>
                      <Link to='/signUp' className='link-signup ms-2' >Don't have account signup</Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>


        </div>

        <br />
        <br /> <div className='row'>
          <div className='col-md-12'>
            <div class="container">
              <h2 className='login-page-text'>Login Here To continue</h2>

            </div>

          </div>
        </div>
        <hr />

        <div className='row m-1 size-form-container'>
          <div className='col-md-4'>

          </div>
          <div className='col-md-4'>
            <div className='login-form-container'>
              <div className='form-container main-form-container mt-3 '>
                <form>
                  <div className='form-title' >
                    Login
                    <hr />
                  </div>
                  <div>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' id='email' placeholder='Email' className='user-input'
                      value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>


                  <div>





                    <label for="password">Password:</label>
                    <div class="input-container">
                      <input type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className='user-input' placeholder=' Password' id="password" name="password" />
                      <i class="btn text-pass" onClick={handleShow}>{show ? "Hide" : "Show"}</i>
                    </div>


                  </div>

                  <div>
                    <hr />
                    <button type='button' className='login-button' onClick={loginUser}>Login</button>
                    <hr />
                    <span className='signup-form-link'>
                      <Link to='/signUp' className='link-signup ms-2' >Don't have account signup</Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>


        </div>

        <br />
        <br />
      </div>
    )
  }

  export default Login
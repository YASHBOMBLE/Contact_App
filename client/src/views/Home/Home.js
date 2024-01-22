import React from 'react'
import { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import swal from 'sweetalert'
import axios from 'axios'
function Home() {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  async function save() {
    const response = await axios.post('/addcontact', {
      name: name,
      phone: phone,
    })
    console.log(response.data)
    if (response.data.success) {

      await swal({
        title: "Success",
        text: response.data.message,
        icon: "success",
        button: "Okk",
      });
      localStorage.setItem('currentUser', JSON.stringify(response.data.data));
      window.location.href = "/"
    }
    else {
      await swal({
        title: "Error",
        text: response.data.message,
        icon: "error",
        button: "Try Again!",
      });
      setName("")
      setPhone("")
      localStorage.removeItem('currentUser');
    }
  }
  return (
    <div>
      <Navbar />
      <div className='row'>
        <div className='col-4'>
        </div>
        <div className='col-4 '>
          <span>
            Name :
          </span>
          <input type='text' placeholder='Name' className=''
            value={name} onChange={(e) => setName(e.target.value)} />
          <span>
            MO.NO :
          </span>
          <input type='text' placeholder='Mono' className=''
            value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={save}>
            Save
          </button>
        </div>
        <div className='col-4'>
        </div>
      </div>

      <table class="table table-hover">
        <thead>
          <tr>           
            <th scope="col">Name</th>
            <th scope="col">Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            
    
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  )
}

export default Home
import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import { currentUser } from '../../util/currentUser'
import swal from 'sweetalert'
import axios from 'axios'
import './Home.css'
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

  const [currentContact, setAllcontact] = useState([])
  async function fetchAllContacts() {
    const response = await axios.get('allcontact')
    console.log(response.data.data);
    setAllcontact(response.data.data)
  }
  useEffect(() => {
    fetchAllContacts();
  }, [])

  if (!currentUser) {
    window.location.href = '/login'
  }
  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <span className='heading'>Add Contact</span>
        </div>

      </div>
      <div className='row'>
        <div className='col-4'>
        </div>
        <div className='col-4 '>
         <br />
          <span className='input-title'>
            Name :
          </span>
          <input type='text' placeholder='Name' className='input-box'
            value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />
          <span className='input-title'>
            MO.NO :
          </span>
          <input type='text' placeholder='Mono' className='input-box'
            value={phone} onChange={(e) => setPhone(e.target.value)} />
          <br />
          <button onClick={save} className='save-btn'>
            Save
          </button>
        </div>
        <br />
        <hr className="m-2" />
        <div className='col-4'>
        </div>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Contact No</th>
          <th>Action</th>
        </tr>
        {
          currentContact?.map((index, item) => {
            return (
              <>
                <tr>
                  <td>  {index.name}</td>
                  <td>{index.phone}</td>
                  <td><i class="fa-solid fa-trash"></i> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; <i class="fa-regular fa-pen-to-square"></i></td>
                </tr>
              </>
            )
          })
        }
      </table>
    </div>
  )
}

export default Home
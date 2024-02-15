import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import Swal from 'sweetalert2'
import { currentUser } from '../../util/currentUser'
import swal from 'sweetalert'
import axios from 'axios'
import './Home.css'
function Home() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [id, setId] = useState([])
  const [updatedName, setUpdatedName] = useState('')
  const [updatedPhone, setUpdatedPhone] = useState('')


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

  function getId() {
    currentContact?.map((index, item) => {
      setId(index._id)
    })
  }

  function logOut() {
    localStorage.removeItem('currentUser');
    window.location.href = '/login'
  }

  const [currentContact, setAllcontact] = useState([])
  async function fetchAllContacts() {
    const response = await axios.get('allcontact')
    console.log(response.data.data);
    setAllcontact(response.data.data)
  }
  useEffect(() => {
    fetchAllContacts();
    getId();
  }, [])

  if (!currentUser) {
    window.location.href = '/login'
  }

  // async function deletecontact(){
  //   id?.map((index,item)=>{
  //     const response =  axios.post('/deletecontact', {
  //       id : item
  //     })
  //     return(
  //       <>
  //        alert('success')
  //       </>
  //     )
  //   })

  // }
  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <span className='heading'>Add Contact</span>
          <h6 className='me-2 text-light nav-logout' onClick={logOut}>Logout  <span><i class="fa-solid fa-right-from-bracket"></i></span> </h6>
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
                  <td><i class="fa-solid fa-trash" onClick={async () => {
                    const response = axios.post('/deletecontact', {
                      id: index._id
                    })

                    await Swal.fire({
                      title: "Success!",
                      text: "Contact Deleted",
                      icon: "success"
                    });

                    window.location.reload();


                  }}></i> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; <i class="fa-solid fa-phone" onClick={()=>{
                    window.open('tel:`{index.phone}`')
                  }}></i></td>
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
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


                  }}></i> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<i class="fa-regular fa-pen-to-square" onClick={async () => {
                    const { value: formValues } = await Swal.fire({
                      title: "Update Contact",
                      html: `
                    
                      <lable>Name : </lable>
                        <input id="swal-input1" class="input-box" value={hello}><br/><br/>
                        <lable>Phone : </lable>
                        <input id="swal-input2" class="input-box">
                      `,
                      focusConfirm: false,
                      preConfirm: () => {
                        return [
                          document.getElementById("swal-input1").value,
                          document.getElementById("swal-input2").value
                        ];
                      }
                    });
                    if (formValues) {
                      await Swal.fire({
                        title: "Success!",
                        text: "Contact Updated",
                        icon: "success"
                      });

                    }
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
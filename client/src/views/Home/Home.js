import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'

function Home() {
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
          <input type='text' />
          <span>
            MO.NO :
          </span>
          <input type='text' />
          <button>
            Save
          </button>
        </div>
        <div className='col-4'>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
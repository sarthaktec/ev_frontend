import React from 'react'
import '../pages/dashboard.css'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (<>
    <Navbar />
    <section>
      <div className='container'>
        <div className='card-box1'>
        <Link to="/businessPatner"><button className='pat-bt'>patner Page</button></Link>
        <Link to="/employee-details"><button className='pat-bt'>Attrition Page</button></Link>
        </div>
      </div>
    </section>
  </>
  )
}

export default Dashboard
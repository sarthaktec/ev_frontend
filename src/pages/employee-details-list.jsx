import React from 'react'
import '../pages/dashboard.css'
import Navbar from '../components/navbar'
import AttritionNotification from '../components/Attrition Notification'
import HumanResource from '../components/HumanResource'
import Finance from '../components/Finance'
import Recruitment from '../components/Recruitment'
import '../pages/employe.css'







const Employeedetailslist = () => {
  return (
    <>
      <Navbar />
      <section>
        <form>
        <div className='container'>
         <AttritionNotification/>
         <HumanResource/>
         <Finance/>
         <Recruitment/>
          <button className='but-emp' >Submit</button>
        </div>
        </form>
      </section>
    </>
  )
}

export default Employeedetailslist
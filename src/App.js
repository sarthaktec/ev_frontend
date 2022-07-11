import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import Login from './components/login'
// import SignUp from './components/Register'
import Dashboard from './pages/dashboard'
import EmployeeDetails from './pages/employee-details-list'
import BusinessPatner from './pages/businessPatner'
import Layout from './components/Layout'

function App() {
  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route exact path="/" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>
        {/* <Route path='/Register' element={<SignUp />} /> */}
        <Route element={<RequireAuth allowedRoles={['ADMIN']} />}>
          <Route path="/employee-details" element={<EmployeeDetails />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={['SENIOR_BUSINESS_PARTNER']} />}>
          <Route path='/businessPatner' element={<BusinessPatner />} />
        </Route>
      </Route>

    </Routes>

  )
}
export default App
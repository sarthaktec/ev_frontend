
import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth()
    const location = useLocation()
    console.log('allowed role', allowedRoles)
    console.log('this is auth', auth)
    console.log('this is auth', auth.roles)

  return  (
    auth?.roles?.find((role )=> allowedRoles?.includes(role)) 
    ? <Outlet/> 
    : auth?.user
    // ? <Navigate to='/unauthorized' state={{from:location}} replace/> 
    ? <Outlet/>
    : <Navigate to='/' state={{from:location}} replace />
  )
}

export default RequireAuth


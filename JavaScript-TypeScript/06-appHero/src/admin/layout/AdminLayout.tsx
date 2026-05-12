import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <>
    <div className='bg-blue-300'>AdminLayout</div>
    <Outlet />
    </>
  )
}

export default AdminLayout
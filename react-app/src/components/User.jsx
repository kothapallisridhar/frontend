import { Link, Outlet } from 'react-router-dom'

const User = () => {
  return (
    <>
        <div>User Component</div>
        <button><Link to='orders'>Orders</Link></button>
        <button><Link to='profile'>Profile</Link></button>
        <Outlet/>
    </>
  )
}

export const Orders = () => {
    return (
        <div>Orders Component</div>
    )
}

export const Profile = () => {
    return (
        <div>Profile Component</div>
    )
}

export default User
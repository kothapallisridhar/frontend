import { Link } from 'react-router-dom'

const  Header = () => {
  return (
    <div>
        <ul>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/login'>Login</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/contact'>Contact Us</Link>
            <Link className='link' to='/user'>User</Link>
        </ul>
    </div>
  )
}

export default Header
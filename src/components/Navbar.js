import { Link } from 'react-router-dom'
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from '../hooks/useAuthContext';

// styles & images
import './Navbar.css'
import Police from '../assets/iconmonstr-police-1.svg'

export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Police} alt="npd infocore" />
          <span>NPD Infocore</span>
        </li>

        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
          )}

        {user && (
          <>

          
        <li>
          {!isPending && <button className="btn" onClick={logout}>Logout</button>}
          {isPending && <button className="btn" disabled>Loggin out</button>}
        </li>
        </>
        )}
      </ul>
    </nav>
  )
}
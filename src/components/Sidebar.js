import { NavLink } from 'react-router-dom';
// import { useAuthContext } from "../hooks/useAuthContext";

//components
    // import Avatar from './Avatar'
// styles & images
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg'
import { useAuthContext } from './../hooks/useAuthContext';


export default function Sidebar() {
    const { user } = useAuthContext()
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="user">
                    <img className="m-image" src="https://firebasestorage.googleapis.com/v0/b/info-core-73435.appspot.com/o/NPD%20Patch%20.png?alt=media&token=1a438b3d-e688-49c1-b70a-93dd7365bec6" alt="dept logo" />
                    <p> Logged In As: {user.displayName}</p>
                </div>
                <nav className="links">
                    <ul>
                        <li>
                            <NavLink to="/">
                                <img src={DashboardIcon} alt="home" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/create">
                                <img src={AddIcon} alt="create something" />
                                <span>Enter Vehicle</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

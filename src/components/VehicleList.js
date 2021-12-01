import './VehicleList.css'
import { Link } from 'react-router-dom';
import Avatar from "./Avatar";

export default function VehicleList({fleetvehicles}) {

    return (
        <div className="vehicle-list">
            {fleetvehicles.length === 0 && <p>No vehicles to show</p>}
            {fleetvehicles.map(fleetvehicle => (
                <Link to={`/vehicle/${fleetvehicle.id}`} key={fleetvehicle.id}>
                <h4>{fleetvehicle.unitNumber}</h4>
                <p>Entered On {fleetvehicle.entryDate.toDate().toDateString()}</p>
                <div className="assigned-to">
                      <ul>
                        {fleetvehicle.assignedUsersList.map(user => (
                            <li key={user.imgAvatar}>
                               <Avatar src={user.imgAvatar}/>
                               {user.displayName}
                            </li>
                        ))}
                    </ul>
                </div>
                </Link>
            ))}
        </div>
    )
}
// https://github.com/iamshaunjp/React-Firebase/blob/lesson-178/the-dojo/src/components/ProjectList.js
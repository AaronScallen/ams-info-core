import Avatar from '../../components/Avatar'

export default function VehicleSummary({ fleetvehicle }) {
    return (
        <div>
            <div className="vehicle-summary">
                <h2 className="page-title">{fleetvehicle.unitNumber}</h2>
                
                <p className="vehmake">
                {fleetvehicle.vehMake}
                </p>
                <p className="details">
                    {fleetvehicle.vehDetails}
                </p>

                <p className="entryDate">
                    Entered On {fleetvehicle.entryDate.toDate().toDateString()}
                </p>
                <h4>Vehicle Assigned To:</h4>
                <div className="assigned-users">
                    {fleetvehicle.assignedUsersList.map(user => (
                        <div key={user.id}>
                        {user.displayName}
                            <Avatar src={user.imgAvatar} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

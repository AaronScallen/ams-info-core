import { useState, useEffect } from 'react'
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from './../../hooks/useAuthContext';
import { timestamp } from '../../firebase/config';
import Select from 'react-select'
import { useFirestore } from './../../hooks/useFirestore';
import { useHistory } from 'react-router-dom';
// styles
import './Create.css'

const vehcategories = [
  { value: 'patrol', label: 'Patrol' },
  { value: 'campus', label: 'Campus' },
  { value: 'supervisor', label: 'Supervisor' },
  { value: 'notinservice', label: 'Not In Service' },
]

export default function Create() {
  const history = useHistory()
  const { addDocument, response } = useFirestore('fleetvehicles')
  const { documents } = useCollection('users')
  const { user } = useAuthContext()
  const [users, setUsers] = useState([])


  // form field values
  const [unitNumber, setUnitNumber] = useState('')
  const [vehMake, setVehmake] = useState('')
  const [vehDetails, setVehdetails] = useState('')
  const [entryDate, setEntryDate] = useState('')
  const [vehCategory, setVehCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError, setFormError] = useState(null)

  useEffect(() => {
    if (documents) {
      setUsers(documents.map(user => {
        return { value: { ...user, id: user.id }, label: user.displayName }
      }))
    }
  }, [documents])


  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    if (!vehCategory) {
      setFormError('Select Assignment Category')
      return
    }
    if (assignedUsers.length < 1) {
      setFormError('Select entity this vehicle should be assigned to.')
      return
    }

    const createdBy = {
      displayName: user.displayName,
      // imgAvatar: user.imgAvatar,
      id: user.uid
    }

    const assignedUsersList = assignedUsers.map(u => {
      return {
        displayName: u.value.displayName,
        // imgAvatar: u.value.imgAvatar,
        id: u.value.id
      }
    })

    const fleetvehicle = {
      unitNumber,
      vehMake,
      vehDetails,
      assignedUsersList,
      createdBy,
      vehCategory: vehCategory.value,
      entryDate: timestamp.fromDate(new Date(entryDate)),

    }
    await addDocument(fleetvehicle)
    if (!response.error) {
      history.push('/')
      console.log('published')
    }
    // console.log(fleetvehicle)
  }

  return (
    <div className="create-form">
      <h2 className="page-title">Enter New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Unit Number:</span>
          <input
            required
            type="text"
            onChange={(e) => setUnitNumber(e.target.value)}
            value={unitNumber}
          />
        </label>
        <label>
          <span>Vehicle Make:</span>
          <input
            required
            type="text"
            onChange={(e) => setVehmake(e.target.value)}
            value={vehMake}
          />
        </label>
        <label>
          <span>Vehicle Details:</span>
          <textarea
            required
            onChange={(e) => setVehdetails(e.target.value)}
            value={vehDetails}
          ></textarea>
        </label>
        <label>
          <span>Set Entry date:</span>
          <input
            required
            type="date"
            onChange={(e) => setEntryDate(e.target.value)}
            value={entryDate}
          />
        </label>
        <label>
          <span>Assignment Category:</span>
          <Select
            onChange={(option) => setVehCategory(option)}
            options={vehcategories} />
        </label>
        <label>
          <span>Assign to:</span>
          <Select
            onChange={(option) => setAssignedUsers(option)}
            options={users}
            isMulti
          />
        </label>
        {formError && <p className="error">{formError}</p>}
        <button className="btn">Add Vehicle</button>


      </form>
    </div>
  )
}
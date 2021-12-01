import { useParams } from "react-router-dom"
import { useDocument } from '../../hooks/useDocument'
import VehicleSummary from './VehicleSummary'
// styles
import './Vehicle.css'
import VehicleComments from "./VehicleComments"

export default function Vehicle() {
  const { id } = useParams()
  const { document, error } = useDocument('fleetvehicles', id)

  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="vehicle-details">
      <VehicleSummary fleetvehicle={document}/>
      <VehicleComments />
    </div>
  )
}
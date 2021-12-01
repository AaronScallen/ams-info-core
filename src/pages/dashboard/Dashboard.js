// styles
import './Dashboard.css'
import { useCollection } from './../../hooks/useCollection';
import VehicleList from '../../components/VehicleList';

export default function Dashboard() {
  const { documents, error } = useCollection('fleetvehicles')

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && <VehicleList fleetvehicles={documents} />}
    </div>
  )
}
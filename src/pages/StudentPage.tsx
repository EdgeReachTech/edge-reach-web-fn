import Dashboard from '../components/GeneralDashboard'
import StudentManagement from '../components/studentManagement'

const StudentPage = () => {
  return (
    <div>
    <Dashboard MainComponent={StudentManagement}/>
    </div>
  )
}

export default StudentPage
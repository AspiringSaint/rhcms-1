import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';

import LoginPage from './pages/auth/LoginPage';

import AdminDashboardPage from './pages/admin/AdminDashboardPage';

import PatientsPage from './components/patients/PatientsPage';
import PatientList from './components/patients/PatientList';
import PatientForm from './components/patients/PatientForm';
import PatientProfile from './components/patients/PatientProfile';

import StaffPage from './components/staffs/StaffPage';
import StaffList from './components/staffs/StaffList';
import StaffForm from './components/staffs/StaffForm';
import StaffProfile from './components/staffs/StaffProfile';

import SchedulePage from './components/schedules/SchedulePage';
import ScheduleList from './components/schedules/ScheduleList';
import ScheduleForm from './components/schedules/ScheduleForm';

const App = () => {
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />

      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' element={<LoginPage />} />
        </Route>

        <Route path='/admin' element={<DashboardLayout />}>
          <Route index path='dashboard' element={<AdminDashboardPage />} />

          <Route path='patients' element={<PatientsPage />}>
            <Route index element={<PatientList />} />
            <Route path='register' element={<PatientForm />} />
            <Route path=':id' element={<PatientProfile />} />
          </Route>

          <Route path='staffs' element={<StaffPage />}>
            <Route index element={<StaffList />} />
            <Route path='register' element={<StaffForm />} />
            <Route path=':id' element={<StaffProfile />} />
          </Route>

          <Route path='schedules' element={<SchedulePage />}>
            <Route index element={<ScheduleList />} />
            <Route path='add' element={<ScheduleForm />} />
          </Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
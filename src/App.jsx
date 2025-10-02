import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';

import LoginPage from './pages/auth/LoginPage';

import AdminDashboardPage from './pages/admin/AdminDashboardPage';

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
        </Route>

      </Routes>
    </>
  )
}

export default App
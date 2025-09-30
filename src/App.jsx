import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import PublicLayout from './layouts/PublicLayout';

import LoginPage from './pages/auth/LoginPage';

const App = () => {
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />

      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
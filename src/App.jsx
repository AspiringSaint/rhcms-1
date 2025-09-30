import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import PublicLayout from './layouts/PublicLayout';

const App = () => {
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />

      <Routes>
        <Route path='/' element={<PublicLayout />} />
      </Routes>
    </>
  )
}

export default App
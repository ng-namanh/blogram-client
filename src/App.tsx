import { Routes, Route } from 'react-router-dom'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import RegisterMethodPage from '@/views/auth/register/RegisterMethodPage'
import RegisterFormPage from './views/auth/register/RegisterFormPage'

function App() {
  return (
    <MaxWidthWrapper>
      <Routes>
        <Route path='/register' element={<RegisterMethodPage />} />
        <Route path='email_signup' element={<RegisterFormPage />} />
      </Routes>
    </MaxWidthWrapper>
  )
}

export default App

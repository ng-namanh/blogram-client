import { Routes, Route } from 'react-router-dom'

import MaxWidthWrapper from '@/components/layouts/MaxWidthWrapper'
import RegisterMethodPage from '@/views/auth/register/RegisterMethodPage'
import RegisterFormPage from '@/views/auth/register/RegisterFormPage'
import LoginFormPage from '@/views/auth/login/LoginFormPage'
import AuthLayout from '@/components/layouts/AuthLayout'

function App() {
  return (
    <MaxWidthWrapper>
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='/auth/register' element={<RegisterMethodPage />} />
          <Route path='/auth/email_signup' element={<RegisterFormPage />} />
          <Route path='/auth/login' element={<LoginFormPage />} />
        </Route>
      </Routes>
    </MaxWidthWrapper>
  )
}

export default App

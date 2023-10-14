import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthorizerWrapper } from './AuthorizerWrapper/AuthorizerWrapper'
import { StudentPage } from './StudentPage/StudentPage'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AuthorizerWrapper/>} path='/'/>
            <Route element={<StudentPage/>} path='/student'/>

            <Route element={<div>Not found</div>} path='*'/>
        </Routes>
    </BrowserRouter>
  )
}
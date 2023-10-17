import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StudentPage } from '../pages/StudentPage/StudentPage'
import { AuthorizerWrapper } from '../pages/AuthorizerWrapper/AuthorizerWrapper'
import { Schedule } from '../pages/Schedule/Schedule'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AuthorizerWrapper/>} path='/'/>
            <Route element={<StudentPage/>} path='/student'/>
            <Route element={<Schedule/>} path='/shedule'/>
            <Route element={<div>Not found</div>} path='*'/>
        </Routes>
    </BrowserRouter>
  )
}
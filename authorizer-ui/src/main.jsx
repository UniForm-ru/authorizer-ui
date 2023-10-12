import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthorizerWrapper } from './AuthorizerWrapper.jsx'
import { StudentPage } from './components/StudentPage/StudentPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StudentPage />
  </React.StrictMode>,
)

import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Books from '../pages/Books'
import App from '../App'


function MyRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/:id' element={<Books />} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default MyRouter
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    < BrowserRouter>
    <Routes>
      <Route path='/' element={'welcome'} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

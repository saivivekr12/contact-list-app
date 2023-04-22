import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import AddContact from './routes/AddContact'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/add" element={<AddContact/>}/>
        <Route path="/edit" element={<AddContact/>}/>
      </Routes>
    </div>
  )
}

export default App

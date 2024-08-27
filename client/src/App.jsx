
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './pages/Home'
import NavigationBar from './components/NavigationBar'
import Signup from './pages/Signup';
import Login from './pages/Login';
import FooterBar from './components/FooterBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

    <Router>
    <div className="App">
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/signup' element= { <Signup/> } />
          <Route path='/login' element={<Login/>} />
           
        </Routes>
      </main>
      <FooterBar />
    </div>
  </Router>
  )
}

export default App

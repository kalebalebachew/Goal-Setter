import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import Signup from './pages/signup';
import Login from './pages/login';


function App() {
  return (
    <>
 
    <Router>
    <div className='container'>
    <Header/>
     <Routes>
      <Route path='/' element= {< Home/>} />
      <Route path='/signup' element= {<Signup/>} />
      <Route path='/login' element= {<Login/>} />
     </Routes>

    </div>
    </Router>
    </>
  );
}

export default App;

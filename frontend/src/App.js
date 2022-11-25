import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import SignupMain from './pages/SignupMain';
const App = () => {

  return (
    <Routes>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/signup" element={<Signup />}/>
      <Route exact path="/" element={<Netflix />}/>
      <Route exact path="/signupmain" element={<SignupMain />}></Route>
    </Routes>
  )
};

export default App;

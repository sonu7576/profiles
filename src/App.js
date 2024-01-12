import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Profile from './pages/Profile';





function App() {
  return (
    <>



<Routes>

<Route path='/' element={<Home />} />
<Route path='/profile' element={<Profile />} />




</Routes>

      

      

    </>
  );
}

export default App;

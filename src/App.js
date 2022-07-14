import './App.css';
import { User1 } from './Pages/User1'
import { User2 } from './Pages/User2'
import { User3 } from './Pages/User3'
import { User4 } from './Pages/User4'
import { Route, Routes,useRoutes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<User1 />} />
        <Route path='/user2' element={<User2 />} />
        <Route path='/user3' element={<User3 />} />
        <Route path='/user4' element={<User4 />} />
      </Routes>
 */}
      <User1 />
    </div>
  );
}

export default App;

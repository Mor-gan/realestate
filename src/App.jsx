 import Landing from './Pages/landing';
import { Route, Routes } from 'react-router-dom'

function App() {
     return (
         <div>
      <Routes>
       {/* <Route exact  path="/" element={<Landing/>} /> */}
        <Route exact path="/" element={<Landing/>}/>
          </Routes>
          </div>
    );
 }
  export default App;
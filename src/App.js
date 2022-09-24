
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainData from './pages/MainData';
import Navv from './component/Navv';
import ItemFromMain from './pages/ItemFromMain';


function App() {



  return (
    <div className="App">
     <div className="container"><Navv /></div> 

     <Routes>
      <Route path="/" element={<MainData/>}/>
      <Route path="/add-new" element={<ItemFromMain  />}/>
     </Routes>


    </div>
  );
}

export default App;

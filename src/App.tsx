import { useState } from 'react';
import './App.css';
import productos from './assest/js/script.json';
import Productos from './containers/productos/Productos';

function App() {

  const [productosLocal, setProductosLocal] = useState(productos);
  
  

  return (
    <div className="App container">
      <div className="  bg-info ps-4 "><h1 className="title">Productos</h1></div>
      <Productos productos={productosLocal}/>
    </div>
  );
}

export default App;

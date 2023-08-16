
/* import { useState } from 'react'; */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar/NavBarComponent';
import ItemListContainer from './ItemListContainer/ItemListContainer';


const App =() => {
  
  /* const [count, setCount] = useState (1); */
  

  return (
   <div>
    <NavBarComponent />
    <ItemListContainer greeting="Bienvenidos" />

   </div>
  )
}

export default App;

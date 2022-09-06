import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';


function App() {
  return (
    <div >
     <NavBar/>
     <ItemListContainer greeting="hello"/>
    
    </div>
  );
}

export default App;

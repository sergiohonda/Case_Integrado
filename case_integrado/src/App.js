import './App.css';
import Header from './Components/Header';
import ListaBiscoitos from './Pages/ListaBiscoitos';

function App() {
  return (
    <div>
      <Header/>
      <div className="pagina-biscoitos">
        <ListaBiscoitos/>
      </div>
    </div>
  );
}

export default App;

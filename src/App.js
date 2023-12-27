import logo from './logo.svg';
import './App.css';
import ToDoList from './componnents/ToDoList/ToDoList.jsx';
import Fotter from './componnents/Fotter/Fotter.jsx';

function App() {
  return (
    <div className="App">
      <ToDoList/>
      <Fotter/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar';

function App() {

  const currentDate = new Date(2023, 8, 25); 

  return (
    <div className="App">
      <Calendar date={currentDate} />
    </div>
  );
}

export default App;

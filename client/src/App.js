import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import LegislatorsList from './components/LegislatorsList';

function App() {
  return (
    <div>
      <Menu />
      <LegislatorsList />
    </div>
  );
}

export default App;

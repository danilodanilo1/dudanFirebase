import './App.css';
import Home from './Components/Home'
import { AuthProvider } from './ContextApi/provider';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </Router>
  );
}

export default App;

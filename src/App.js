import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Customerlist from "./components/Customerlist";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Traininglist from './components/Traininglist';

function App() {
  return (
    <div className="App">
         <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
          My Personal Training app
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
      <Link to="/customerlist">Customer list</Link>{' '}
      <Link to="/traininglist">Training list</Link>{' '}
      <Routes>
        <Route path="/customerlist" element={<Customerlist />} />
        <Route path="/traininglist" element={<Traininglist />} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;

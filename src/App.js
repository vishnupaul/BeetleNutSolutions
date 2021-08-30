import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminLogin from './components/AdminLogin';
import Home from './components/Home';
import BranchLogin from './components/BranchLogin';
import AdminProfile from './components/AdminProfile';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/adminlogin'>
          <AdminLogin />
        </Route>
        <Route path='/adminprofile'>
          <AdminProfile />
        </Route>
        <Route path='/branchLogin'>
          <BranchLogin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

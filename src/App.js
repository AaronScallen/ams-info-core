import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import './App.css'

//components
import OnlineUsers from './components/OnlineUsers'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
//pages
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Vehicle from './pages/vehicles/Vehicle';
import Officer from './pages/officers/Officer';


function App() {
  const { user, authIsReady } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/login" />}
                {user && <Dashboard />}
              </Route>
              <Route path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>
              <Route path="/login">
              {user && <Redirect to="/"/>}
                {!user && <Login />}
              </Route>
              <Route path="/signup">
              {user && <Redirect to="/"/>}
                {!user && <Signup />}
              </Route>
              <Route path="/vehicle/:id">
              {!user && <Redirect to="/login" />}
                {user && <Vehicle />}
              </Route>
              <Route path="/officer">
              {!user && <Redirect to="/login" />}
                {user && <Officer />}
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App

import logo from './logo.svg';
import './App.scss';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/" component = {DashboardLayout}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

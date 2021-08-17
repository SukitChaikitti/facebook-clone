import './App.css';
import Header from './Header';
import SideBar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import { Fragment } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [ {user} , dispatch] = useStateValue();

  console.log(user)

  return (
    <div className="App">
      {!user ? <Login/> : 
      <Fragment>
        <Header/>
        <div className = 'app__body'>
          <SideBar/>
          <Feed/>
          <Widget/>
        </div>
      </Fragment>}
      
    </div>
  );
}

export default App;


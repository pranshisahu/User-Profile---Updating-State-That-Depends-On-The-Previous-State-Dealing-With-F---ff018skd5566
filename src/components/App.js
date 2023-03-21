import React from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';

const UserContext = React.createContext({name:"Newton", age:3});
const App = () => {

  return (
    <div id="main">
      
        <UserProfile />
      
    </div>
  )
}


export default App;
export {UserContext}

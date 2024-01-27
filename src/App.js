import React, { useState } from 'react';
import UserEntryForm from './Components/UserEntryForm';
import UserEntryList from './Components/UserEntryList';
import Users from "./Components/Users";

const App = () => {
  // const [userEntries, setUserEntries] = useState([]);
  //
  // const addUserEntry = (entry) => {
  //   setUserEntries([...userEntries, entry]);
  // };

  return (
      <div>
        <h1>User Entry System</h1>
        {/*<UserEntryForm addUserEntry={addUserEntry} />*/}
        {/*<UserEntryList userEntries={userEntries} />*/}
          <Users/>
      </div>
  );
};

export default App;

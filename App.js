import React, { useState } from 'react';
import { UserProvider } from './UserContext';
import AppNavigator from './AppNavigator';

const App = () => {
  const [username, setUsername] = useState(null);

  return (
    <UserProvider value={{ username, setUsername }}>
      <AppNavigator />
    </UserProvider>
  );
};

export default App;

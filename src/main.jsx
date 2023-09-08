import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// AuthContext
const AuthContext = createContext();
function AuthContextProvider(props) {
  const [isAuth, setIsAuth] = useState(true);
  const handleAuth = () => setIsAuth(!isAuth);
  const shareObj = { handleAuth, isAuth }

  return <AuthContext.Provider value={shareObj}>
    {props.children}
  </AuthContext.Provider>
}

function App() {
  const { handleAuth, isAuth } = useContext(AuthContext);
  // const [isAuth, setIsAuth] = useState(true);

  // const handleAuth = () => setIsAuth(!isAuth);

  return (
    <div className='App'>
      <h1>Welcome.. {!isAuth ? 'Guest' : 'User'}</h1>
      <button onClick={handleAuth}>{!isAuth ? 'Login' : 'Logout'}</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>

);

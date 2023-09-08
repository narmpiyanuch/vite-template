import React, { createContext, useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';


// AuthContext
const AuthContext = createContext();

function AuthContextProvider({ children }) {

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({ name: "Guest" });

  //isAuth : false => true ให้ delay 3 วิ
  // useEffect(() => {
  //   if (isLoading) {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 5000);
  //   }
  // }, [isLoading]);

  // const handleAuth = () => {
  //   // login : isAuth : false => true
  //   if (!isAuth) {
  //     setIsLoading(true);
  //     setIsAuth(true);
  //   } else {
  //     setIsAuth(false);
  //   }
  // };

  const handleAuth = async () => {
    // Login => Logout
    if (isAuth) {
      setIsAuth(false);
      setUser({ name: "Guest" });
      return;
    }

    // Logout => Login
    try {
      setIsLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      console.log(response.data);
      setUser(response.data);
      setIsAuth(true);

    } catch (err) {
      console.log(err);

    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 5000)
    }

  }

  const shareObj = { handleAuth, isAuth, isLoading, user }
  return <AuthContext.Provider value={shareObj}>
    {children}
  </AuthContext.Provider>
}

function App() {
  const { handleAuth, isAuth, isLoading, user } = useContext(AuthContext);

  return (
    <div className='App'>
      {isLoading ? <h1>Loading...</h1>
        : <h1>Welcome.. {!isAuth ? 'Guest' : user?.name}</h1>}
      <button onClick={handleAuth}>{!isAuth ? 'Login' : 'Logout'}</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>

);

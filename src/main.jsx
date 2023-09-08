import React, { createContext, useState, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Context
// 1. createContext [Provider, Consumer]
const ThemeContext = createContext();

// ## A1. สร้าง HOC : Higher Order Conponent (Provider)
// HOC คือ FC ที่รับ Component เข้าไปและ return Component ใหม่
// function ThemeCreateProvier(props) {
//   return <div>{props.children}</div>;
// }
// function ThemeContextProvier(props) {
//   return <ThemeContext.Provider>{props.children}</ThemeContext.Provider>;
// }

/* 
## A2 Share Data & Logic ผ่าน arttribute value เป็น Obj
==> Data (state, boolean, string, object, array etc.)
==> Logic (Fn ที่ใช้ handle ต่างๆ)
*/

function ThemeContextProvier(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const stylesObj = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    color: isDarkMode ? 'white' : 'black'
  };
  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const shareObj = { theme: stylesObj, toggleTheme: handleToggleTheme }

  return <ThemeContext.Provider value={shareObj}>
    {props.children}
  </ThemeContext.Provider>;
}


// ## A3. นำ Provider ไปครอบ Children
{/* <ThemeContextProvier>
<App />
</ThemeContextProvier> */}


/* 
## B1 : @Children Component ดึงค่า Shared Object ผ่านตัว useContext
Syntax : useContext(ContextName)
*/

// ##################################################
// ##################################################

// UI : Component , เป็น consumer อย่างเดียว
function App() {

  const s = useContext(ThemeContext);

  return (
    <div className='App' style={s.theme}>
      <h1>Theme App</h1>
      <button onClick={s.toggleTheme}>Toggle Theme</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvier>
    <App />
  </ThemeContextProvier>
);

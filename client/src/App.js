// import './App.css';
// import Port from "./img/portrait.jpeg";
// import user from './img/user.jpg';
// import edit from './img/edit.png';
// import inbox from './img/envelope.jpg';
// import settings from './img/settings.png';
// import help from './img/question.webp';
// import logout from './img/logout.png';

// import React, { useState,useEffect,useRef } from 'react';

// function App() {
//   const [open, setOpen] = useState(false); // Moved useState hook inside the App component

//   let menuRef = useRef();

//   useEffect(()=>{
//     let handler =(e)=>{
//       if(!menuRef.current.contains(e.target)){
//       setOpen(false);
//     console.log(menuRef.current);
//     }
//   };
//       document.addEventListener("mousedown",handler);
//       return()=>{
//         document.removeEventListener("mousedown",handler)
//       }
//     });

 


//   return (
//     <div className="App">
//       <div className='menu-container'>
//         <div className='menu-trigger' onClick={()=>{ setOpen(!open)}}>
//           <img src={Port} alt="Menu Trigger" />
//         </div>
//         <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
//           <h3>ADEYEMI OKESANYA<br /><span>WEB DEVELOPER</span></h3>
//           <ul>
//             <DropdownItem img={user} text={"My Profile"} />
//             <DropdownItem img={edit} text={"Edit Profile"} />
//             <DropdownItem img={inbox} text={"Inbox"} />
//             <DropdownItem img={settings} text={"Settings"} />
//             <DropdownItem img={help} text={"Helps"} />
//             <DropdownItem img={logout} text={"Log out"} />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// function DropdownItem(props) {
//   return (
//     <li className='dropdownItem'>
//       <img src={props.img} alt={props.text} />
//       <a>{props.text}</a>
//     </li>
//   )
// }

// export default App;







import './App.css';
import Port from "./img/portrait.jpeg";
import user from './img/user.jpg';
import edit from './img/edit.png';
import inbox from './img/envelope.jpg';
import settings from './img/settings.png';
import help from './img/question.webp';
import logout from './img/logout.png';

import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [open, setOpen] = useState(false); // Moved useState hook inside the App component

  let menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="App">
      <div className='menu-container'>
        <div className='menu-trigger' onClick={() => setOpen(!open)}>
          <img src={Port} alt="Menu Trigger" />
        </div>
        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} ref={menuRef}>
          <h3>ADEYEMI OKESANYA<br /><span>WEB DEVELOPER</span></h3>
          <ul>
            <DropdownItem img={user} text={"My Profile"} />
            <DropdownItem img={edit} text={"Edit Profile"} />
            <DropdownItem img={inbox} text={"Inbox"} />
            <DropdownItem img={settings} text={"Settings"} />
            <DropdownItem img={help} text={"Helps"} />
            <DropdownItem img={logout} text={"Log out"} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className='dropdownItem'>
      <img src={props.img} alt={props.text} />
      <a>{props.text}</a>
    </li>
  )
}

export default App;

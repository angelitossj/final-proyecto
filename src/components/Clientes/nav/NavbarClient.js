import React, { useState,useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './NavbarClient.css';
import { IconContext } from 'react-icons';
import { Session } from '../../../context/Session'
function Navbar() {
  const [sidebar, setSidebar] = useState(Session);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
       
        <div className='navbar'>
          
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
             <div className="text-end">
                  <button onClick={()=>{setSidebar(null)}} type="button" className="cerrarsesion btn btn-danger">
                    Cerrar Sesion
                  </button>
                </div>
          </ul>
          
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

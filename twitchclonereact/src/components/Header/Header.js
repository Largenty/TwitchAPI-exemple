import React from 'react';
import logo from './IconeTwitch.svg'
import search from './Search.svg'
import menuIco from './MenuIco.svg'

const Header = () => {
    
    
  return(
    <div>            
      <nav className="headerTop">

        <ul className="listMenu">

          <li className="liensName">
            <img src={logo} alt="logo twtich" className="logo"/>
          </li>

          <li className="liensNav">
            Top Games
          </li>
          
          <li className="liensNav">
            Top Stream
          </li>

          <li className="liensNav">
            <form className="formSubmit">
              <input type="text" className="inputRecherche"/>
              <button type="submit">
                <img src={search} alt="loupe" className="logoLoupe"/>
              </button>
            </form>            
          </li>

        </ul>

      </nav>
      
      <div className="menuResBtn">
        <img src={menuIco} alt="icone menu responsive" className="menuIco"/>
      </div>  

    </div>
)}

export default Header;
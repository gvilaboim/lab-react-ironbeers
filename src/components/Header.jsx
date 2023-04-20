import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

  return (
    <div style={{display: "flex" ,justifyContent: "center" }}>
        {location.pathname !== "/" && 
           <Link to={'/'}> 
          <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" height="100px" />
           </Link>
        
        }
     
    </div>
  )
}

export default Header
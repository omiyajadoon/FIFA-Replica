import React from 'react'
import'./men2style.css'
import {Link} from "react-router-dom";

const Men2 = () => {
  return (
    <div>
      <div>
      <nav className="logo1">
       
        
      
      
       <label className="logo2"></label>
       <ul  className="active4">
         
           <li>Tournaments FIFA</li>
           <li>About FIFA</li>
           
        
         
            {/* <li>Women's football</li> */}
            <li> Social Impact</li>
            <li>Football development</li>
            <Link to="/menu4"><li> Technical</li></Link>
            <Link to="/menu3"><li> World Ranking</li></Link>
          
       </ul>
   
   </nav>
   <p>_________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
   </div>
    </div>
  )
}
export default Men2;
         
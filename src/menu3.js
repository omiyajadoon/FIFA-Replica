import'./men2style.css'
import {Link} from "react-router-dom";

function Menu3() {
    return ( 

        <div>
            
            <div></div>
           <nav className="logo1">
       
        
      
      
       <label className="logo2"></label>
       <ul  className="active4">
            
           <li>Men's Ranking Procedure</li>
           <li>Women's Ranking Procedure</li>
           <li>Men's Ranking</li>
           <Link to="/privacy"><li>Women's Ranking</li></Link>
           <Link to="/terms"><li>News</li></Link>
          
       </ul>
   
   </nav>
        </div>


     );
}

export default Menu3;
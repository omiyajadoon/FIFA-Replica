// import Menu from "./menu";
// import MappingTable from "./map";

// import Assignment from "./demo";
// import Add from "./add";
// import {Routes,Route} from 'react-router-dom';
// import Lab from "./lab";
// import Form from "./form";

// import Layout from "./gridsystem";

import BottomSection from "./middleSectionBottom";
import Men1 from "./menu1";
import { Routes,Route} from 'react-router-dom';
import Menu3 from "./menu3";
import Menu4 from "./menu4";
import Footer from "./footer";
import Middlesection from "./topSection";
import Privacy from "./privacy";
import Terms from "./terms";



function App() {
  return (

    <div>

    
       
        <Men1/>
       

      
        <Routes>
        <Route path="/menu3" element={<Menu3/>}/>
        <Route path="/menu4" element={<Menu4/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        </Routes> 
        

        <Middlesection/>


        <BottomSection/>
      


        <Footer/>
        

</div> 

     











/* <Layout/> */
    
     

     /* <Lab/>
    

     <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/demo" element={<Assignment/>}/>
     </Routes> */
    
     // <Assignment/>

      // <MappingTable/>
      // <Menu/>
  
  );
}

export default App;

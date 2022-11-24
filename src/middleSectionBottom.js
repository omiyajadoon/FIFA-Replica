import fifalogo from "./images/fifalogo.png"
import brazil from "./images/brazil.png"
import belgium from "./images/belgium.jpg"
import argentina from "./images/argentina.png"
import france from "./images/france.png"
import england from "./images/england.png"
import usa from "./images/usa.png"
import sweden from "./images/sweden.png"
import germany from "./images/germany.png"
import {useState} from "react";

import first from './images/first.jpeg'
import second from './images/second.jpeg'
import third from './images/third.jpeg'

function BottomSection() {

   const [men,setMen]=useState([
       {rk:1, team:"./brazil.png", country:"Brazil", tpoints:"1841.30"},
       {rk:2, team:"./belgium.jpg", country:"Belgium", tpoints:"1816.71"},
       {rk:3, team:"argentina.png", country:"Argentina", tpoints:"1773.88"},
       {rk:4, team:"france.png", country:"France", tpoints:"1759.88"},
       {rk:5, team:"england.png", country:"England", tpoints:"728.47      "},
   ]);

   const [women,setWomen]=useState([
    {rk:1, team:"./usa.png", country:"USA", tpoints:"2087.48"},
    {rk:2, team:"./sweden.png", country:"Sweden", tpoints:"2066.30"},
    {rk:3, team:"germany.png", country:"Germany", tpoints:"2064.75"},
    {rk:4, team:"france.png", country:"France", tpoints:"2051.61"},
    {rk:5, team:"england.png", country:"England", tpoints:"2023.09"},
]);

const[card,setCard]=useState([
    { id:0,content:"Matuidi:Football has the power to create a better world",img:first,title:"Football Unites the world"},
    { id:1,content:"Mario Yepes:Football needs to provide a 'bridge' education",img:second,title:"Football Unites the world"},
    { id:2,content:"Lylod: Every Worldcup has its own highs and lows.",img:third,title:"Football Unites the world"}
]);


    return ( 
 
 <div style={{position:"relative",marginTop:"100px"}}>

     <div style={{width:"200px",height:"100%",marginTop:"0px",position:"absolute"}}>
     <div className="row" style={{marginTop:"30px"}}>
            {
                card.map((setCard,key)=>(
                    
                    <div className="card" style={{width: "18rem",color:"black" ,marginLeft:"10px",marginTop:"-20px"}} >
                    <img className="card-img-top" src={setCard.img} alt="Image"/>
                    <div className="card-body">
                     <h5 className="card-title">{setCard.title}</h5>
                    <p className="card-text">{setCard.content}</p>
                    
                    
                     </div>
                    </div>


                ))
            }
        
        </div>
     </div>

<div style={{width:"200px",height:"100%",marginLeft:"200px"}}>
<img src={fifalogo} alt="Logo" style={{width:"200px",height:"70px",marginTop:"50px",marginLeft:"50px"}} />
<br/>
<br/>
<h2 style={{marginLeft:"50px"}}>WORLD RAKING</h2>
<br/>
<p style={{marginLeft:"50px"}}>The official world ranking of <br/> internaltional men and women <br/> teams.</p>
<br/>
<h6 style={{marginLeft:"50px",color:"blue"}}>FIFA/COCA-COLA WORLD <br/> RANKING</h6>
</div>

<div style={{width:"400px",height:"100%",marginLeft:"500px",marginTop:"-450px"}}>

<h4>MEN</h4>
<table className="table table-bordered">

<tr>
<td>RK</td>
<td>TEAM</td>
<td></td>
<td>TOTAL POINTS</td>
</tr>
{
    men.map((index,key)=>(
    <tr key={index.rk}>
    <th>{index.rk}</th>
    <th><img src={index.team} style={{width:"120px",height:"70px"}}/></th>
    <th>{index.country}</th>
    <th>{index.tpoints}</th>
    </tr>
    
))
}
</table>
<p>Updated 6 October 2022</p>
<h6 style={{color:"blue"}}>Check full men's ranking table </h6>
</div>

<div style={{width:"400px",height:"100%",marginLeft:"930px",marginTop:"-500px"}}>

 <h4>WOMEN</h4> 
 <table className="table table-bordered">

<tr>
<td>RK</td>
<td>TEAM</td>
<td></td>
<td>TOTAL POINTS</td>
</tr>
{
    women.map((index,key)=>(
    <tr key={index.rk}>
    <th>{index.rk}</th>
    <th><img src={index.team} style={{width:"120px",height:"70px"}}/></th>
    <th>{index.country}</th>
    <th>{index.tpoints}</th>
    </tr>
))
}
</table> 
<p>Updated 13 October 2022</p>
<h6 style={{color:"blue"}}>Check full women's ranking table </h6> 
</div>




 </div>
 






     );
}

export default BottomSection;
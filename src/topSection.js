import { useState } from "react";
import first from './images/first.jpeg'
import second from './images/second.jpeg'
import third from './images/third.jpeg'
import fourth from './images/fourth.jpeg'
import fifth from './images/fifth.jpeg'
import sixth from './images/sixth.jpeg'
import seventh from './images/seventh.jpeg'
import './middlesectio.css'

const Middlesection = (e) => {
    const[card,setCard]=useState([
        { id:0,content:"Matuidi:Football has the power to create a better world",img:first,title:"Football Unites the world"},
        { id:1,content:"Mario Yepes:Football needs to provide a 'bridge' education",img:second,title:"Football Unites the world"},
        { id:2,content:"Lylod: Every Worldcup has its own highs and lows.",img:third,title:"Football Unites the world"}
    ]);
    const [news,setNews]=useState([
        {id:0,content:"Global stars join FIFA in launching Football",img:fourth},
        {id:1,content:"Benatia: The world Cup is the most watched event.",img:fifth},
        {id:2,content:"Paulo Wanchope:The world Cup is a magical event",img:sixth},
        {id:3,content:"Alex Lalas:The World Cup is something that is above.",img:seventh},
        {id:0,content:"Global stars join FIFA in launching Football",img:fourth},
        {id:1,content:"Benatia: The world Cup is the most watched event.",img:fifth},
        
    ])
    const handledelete =(cid)=>
    {
        const newdata=card.filter((sid)=>sid.id!=cid)
        setCard(newdata);
    }

    const handledelete2 =(cid)=>
    {
        const newdata=card.filter((sid)=>sid.id!=cid)
        setNews(newdata);
    }

    return( 
        <div className="main" >
            
     <div className="leftside">
        <div className="content">
    <h2>Football Unites The World</h2>
    <p>
        Football Unites the World is a global movement to inspire,unite and develop
        through football.
    </p>
    <h2>More From This Topic</h2>
    </div>
    </div>

    {/* right side starts */}
    <div className="container rightside" style={{backgroundColor:"rgb(37,150,190)"}}>
        <div className="row" style={{marginTop:"30px"}}>
            {
                card.map((setCard,key)=>(
                    
                    <div className="card" style={{width: "18rem",color:"black" ,marginLeft:"10px"}} >
                    <img className="card-img-top" src={setCard.img} alt="Image"/>
                    <div className="card-body">
                     <h5 className="card-title">{setCard.title}</h5>
                    <p className="card-text">{setCard.content}</p>
                    <button className="btn btn-danger" onClick={()=>handledelete(setCard.id)}>Delete</button>
                    
                     </div>
                    </div>


                ))
            }
        
        </div>
        <h3>More</h3>
            <p style={{color:"darkgray"}}>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        <div className="row" style={{marginTop:"10px", backgroundColor:"rgb(37,150,190)",width:"1000px",display:"flex",flexDirection:"row"}}>
            {/* <h3>More</h3>
            <p style={{color:"darkgray"}}>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> */}
            {
                news.map((setNews,key)=>(
                    <div className="news" style={{width:"300px",marginTop:"10px",height:"100px"}} > 
                        <img style={{width:"80px",height:"70px",marginTop:"5px"}}src={setNews.img}/> 
                        
                        <p>{setNews.content}</p>
                        
                     
                    </div>
                   



                ))
            }

        </div>

    </div>
    </div>
);

     
};
export default Middlesection;
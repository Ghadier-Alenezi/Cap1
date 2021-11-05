import React from 'react'
import './style.css'

const Card=(props) =>{

    const handelClick =(elem) =>{
       // send choosen card to tempfunc in game component
        if(!props.permission){
            props.tempImg(elem)
        }
    }

    return (
        <div className={props.elem.isSucssed ? `card hideImg` : `card showImg`}>
        <div className={props.switchCard? `card switch` : `card`} >  
        <img
        className="front"
        src={props.elem.src} 
        alt=""/>
    
        <img  className="back"
       src="https://images5.alphacoders.com/492/492784.jpg"
        onClick={(e)=>{handelClick(props.elem)}}
        
        alt=""/>
        </div>
        </div>
    )
}

export default Card

import React from 'react'
import './style.css'

const Card=(props) =>{

    const handelClick =(elem) =>{
        props.tempImg(elem)// send chosen card to tempfunc in game component
    }

    return (
        <div className="grand">      
        <img 
        src={props.elem.src} 
        onClick={(e)=>{handelClick(props.elem)}}
        className={props.elem.isSucssed ? `hideImg` : `showImg`} 
        alt=""/>
        </div>
    )
}
export default Card
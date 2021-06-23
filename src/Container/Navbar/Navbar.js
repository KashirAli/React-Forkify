import React from 'react';
import logo from '../../Assets/logo.png'
import Form from '../../Components/Form/Form';
import Style from './Navbar.module.css'
const Navbar=(props)=>{
    let classs = ["fa fa-heart fa-2x"];
    classs.push(Style.ficon)
    let classes = classs.join(' ')
    return(
        <div className={Style.grid}>
            <img className={Style.img} src={logo} alt="logo"/>
            <Form submitHandler={(event)=>props.submitSearch(event)}/>
            <i className={classes}></i>
            
        </div>
    );
}
export default Navbar;
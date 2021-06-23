import React from 'react';
import Style from './DisplayUI.module.css'
const DisplayUI = (props)=>{
    return(
 <div className={Style.center}>
    <div style={{width:"100%"}}>
        <img className={Style.img} src={props.recipe.image_url} alt={props.recipe.title}/>
        <h1 className={Style.title}>{props.recipe.title.split(' ').slice(0, 3).join(' ')}</h1>
        <div></div>
    </div>
    <div>
        <div className={Style.grid}>
            {/* list */}
        </div>
    {/* button */}
    </div>
    <div>
        <h1>How to cook it</h1>
        <p>This recipe i</p>
    </div>
</div> 

    );

}
export default DisplayUI;
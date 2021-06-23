import React from 'react';
import pizza from '../../Assets/pizza.jpg'
import Style from  './Post.module.css'
const Post = (props)=>{
  
    return(
        <div className={Style.Main} onClick={()=>props.selected(props.PostData.recipe_id)}>
            <img className={Style.Imgg} src={props.PostData.image_url} alt={props.PostData.title}/>
            <div>
                <h4>{props.PostData.title.split(' ').slice(0, 3).join(' ')}</h4>
                <p>{props.PostData.publisher}</p>
            </div>
        </div>
    )
}
export default Post;
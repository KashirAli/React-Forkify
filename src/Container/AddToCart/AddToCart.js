import React,{Component} from 'react';
import Style from './AddToCart.module.css';
class AddToCart extends Component{

    render(){
        return(
            <div className={Style.parent}>
                <h1 className={Style.heading}>My Shopping Cart</h1>
            </div>
        )
           
    }
}
export default AddToCart;
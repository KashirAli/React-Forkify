import React,{Component} from 'react';

import AddToCart from '../AddToCart/AddToCart';
import DisplayPanel from '../DisplayPanel/DisplayPanel';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import Navbar from '../Navbar/Navbar';
import './AllHandler.css'
class AllHandler extends Component{
    state={
        search:'',
        recipeId:''
    };
    submitSearch = (value)=>{
        this.setState({search:value})
    }
    displayHandler =(rId)=>{
        this.setState({recipeId:rId});
        console.log(rId)
    }
    render(){
        console.log("All:",this.state.recipeId)
        return(
            <>
                <header className='header'>
                   <Navbar submitSearch={this.submitSearch}/>
                </header>

                <main className="main_grid">
                    <LeftSideBar search={this.state.search} select={this.displayHandler}/>
                    {this.state.recipeId? <DisplayPanel recipe={this.state.recipeId}/>:<div className='nu'></div>}
                    
                    <AddToCart/>
                </main>
            </>
        );
    }
}
export default AllHandler;
import React,{Component} from 'react';
import Style from './DisplayPanel.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import axios from 'axios'
import DisplayUI from '../../Components/DisplayUI/DisplayUI';
class DisplayPanel extends Component{
    state={
        recipe:''
    }
  
    componentDidMount(){
        if(this.props.recipe != undefined){
            axios.get('https://forkify-api.herokuapp.com/api/get?rId='+ this.props.recipe)
            .then(res=>this.setState({recipe:res.data.recipe}))
        }
       
       
console.log(this.props.recipe,'comp')
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.recipe!=this.props.recipe){
            axios.get('https://forkify-api.herokuapp.com/api/get?rId='+ this.props.recipe)
            .then(res=>this.setState({recipe:res.data.recipe}))
        }
    }
   
    render(){
        console.log(this.props.recipe,'final')
        return(
            <div className={Style.Display}>
                {this.state.recipe? <DisplayUI recipe={this.state.recipe} />: <div style={{marginLeft:'47%'}}><Spinner/></div>}
               

            </div>
            
        )
    }
}
export default DisplayPanel;
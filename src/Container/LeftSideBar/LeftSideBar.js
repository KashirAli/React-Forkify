import axios from 'axios';
import React,{Component} from 'react';
import Post from '../../Components/Post/Post'
import Spinner from '../../UI/Spinner/Spinner';
import Style from './LeftSideBar.module.css'
class LeftSideBar extends Component{
        state={
            serverData:[],
            postPerPage:6,
            currentPage:1,
            loading:false,
            prev:false,
            next:false,
            search:'',
            max:0
        }
      
    componentDidUpdate(prevProps,prevState){
     
      if(prevProps.search!==this.props.search 
        || prevState.search!==this.state.search){

            this.setState({search:this.props.search,loading:true})           
                if(this.state.search){
                
                axios.get('https://forkify-api.herokuapp.com/api/search?q='+this.state.search)
                        .then(res=>  this.setState({currentPage:1,
                            loading:false,
                            serverData:res.data,
                            max:(Math.ceil(res.data.count/this.state.postPerPage)
                            )}
                    ));
               }         
        }    
    }
         
    render(){
        const paginate = (type)=>{
               
            if(type==='prev'){
               if(this.state.currentPage <= 1)   return null;
               else this.setState({prev:true,
                next:true,
                currentPage:this.state.currentPage-1})
           }
           if(type==='next' && this.state.currentPage < this.state.max){
                if(this.state.currentPage >= 1 && this.state.currentPage<this.state.max ){console.log("if true"); return this.setState({prev:true,next:true,currentPage:this.state.currentPage+1});}
             
            }
            if(this.state.currentPage === this.state.max) this.setState({next:false})   
       }
        // Get current posts
        
           let data =<div style={{margin:'0 130px'}}> <Spinner/> </div>;

           if(!this.state.loading) {
               if(this.state.serverData.recipes){
                   console.log("server:",this.state.serverData)
                const indexOfLastPost = this.state.currentPage * this.state.postPerPage;
                const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
                let currentPosts = this.state.serverData.recipes.slice(indexOfFirstPost, indexOfLastPost);
                
                data =currentPosts.map((currPost,index)=>{
                  
                    return(<Post key={index} PostData={currPost} selected={this.props.select}  />)
                })
               }
              
           }
        let claprev = [];
        let claDis = [];
        claDis.push(Style.disabled);
        claDis.push(Style.round);
        const clasdis = claDis.join(' ');
        claprev.push(Style.previous);
        claprev.push(Style.round);
        const clasprev = claprev.join(' ');
   
        let clanext = [];
        clanext.push(Style.next);
        clanext.push(Style.round);
        const clasnext = claprev.join(' ');
        return(
           <div>
              {data}
              <div style={{width:'150px',position:'absolute',bottom:'40px',left:'90px'}}>

                    <a style={{marginRight:'70px'}} onClick={()=>paginate('prev')} className={this.state.prev?clasprev:clasdis}>&#8249;</a>
                    <a onClick={()=>paginate('next')} className={this.state.next?clasnext:clasdis}>&#8250;</a>        
                
              </div>
           </div>
        )
    }
}
export default LeftSideBar;
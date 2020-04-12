import React from 'react';
import {connect} from 'react-redux';
import {Fetchpost} from '../action';
import Userheader from './userheader';
class Postlist extends React.Component{
  componentDidMount(){
      
       this.props.Fetchpost();
    }
    renderlist(){
        return this.props.posts.map(post=>{
            return(
                <div className='item' key={post.id}>
                <i className='large middle aligned icon user'/>
                <div className='content'>
                <div className='description'>
                <h2>{post.title}</h2>
                <p>{post.body} </p>
                </div>
                <Userheader userId={post.userId}/>
                </div>
                </div>
            )
        })
    }
    render (){
        
        return(
            <div className='ui relaxed divided list' >{this.renderlist()}</div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {posts:state.posts}
}

export default  connect(mapStateToProps,{Fetchpost}) (Postlist);
import React from 'react';
import {connect} from 'react-redux';
import {Fetchuser} from '../action';
class Userheader extends React.Component{
componentDidMount(){
    this.props.Fetchuser(this.props.userId)
}

    render(){
        const user=this.props.user;
        if(!user){
            return null;
        }
        return (
            <div className='header'>{user.name}</div>
        )
    }
}
 const mapStateToProps=(state,ownprops)=>{
         return {user:state.users.find(user=>user.id===ownprops.userId)}
 }

export default  connect(mapStateToProps,{Fetchuser}) (Userheader);






















/*import React from 'react';
import {connect} from 'react-redux';
import {Fetchuser} from '../action';

class Userheader extends React.Component{

    componentDidMount(){
        this.props.Fetchuser(this.props.userId)
    }
     
    render(){
      console.log(this.props.users)
      const user=this.props.users.find((user)=>{user.id===this.props.userId});
      if (!user){
          return null;
     }
     
        return(
            <div className='header' >{user.name}</div>
        )
    }
    return <div>Userheader</div>
   
}
//const mapStateToProps=(state)=>{
  //  return {users:state.users}
 //}

export default connect(null,{Fetchuser}) (Userheader);*/
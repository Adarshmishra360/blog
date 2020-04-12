 import _ from 'lodash';
 import jsonplaceholder from '../api/jsonplaceholder'
 
 export const Fetchpost=  ()=>{
  return async  (dispatch)=>{
      const response =await jsonplaceholder.get('/posts');
      dispatch({type:'FETCH_POST',payload:response.data})
  }
}
export const Fetchuser=  (id)=>{
  return async  (dispatch)=>{
      const response =await jsonplaceholder.get(`/users/${id}`);
      dispatch({type:'FETCH_USER',payload:response.data})
  }
}
/*export const Fetchuser=id =>dispatch=>{
  _fetchuser(id,dispatch);
}
const _fetchuser=_.memoize(async(id,dispatch)=>{
  const response =await jsonplaceholder.get(`/users/${id}`);
  dispatch({type:'FETCH_USER',payload:response.data});
})*/


    

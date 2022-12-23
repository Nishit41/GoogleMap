const initialstate ={
  location: []
};


export const locationReducer  = (state=[],action)=>{
  
    // switch(action.type){
    //     case 'LOCATION_DETAILS' : 
    //     return { action.location, ...state};
    //     default:return state;
    // }
    if(action.type === 'LOCATION_DETAILS' ){
      console.log(action,"REducer called");
      return [action.data, ...state];
    }
    else{
      return state;
      }


}


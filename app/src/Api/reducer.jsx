

  
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";

export const fetchUserRequest = () =>({type: "FETCH_USER_REQUEST"});
export const fetchUserSuccess = (user)=> ({type:"FETCH_USER_SUCCESS",payload:user});
export const fetchUserFailure = (error)=> ({type:"FETCH_USER_FAILURE",payload:error});


const initialState={user:null, loading:false, error:null,};

const userReducer = (state=initialState,action)=>
{
    switch (action.type)
    {
        case "FETCH_USER_REQUEST":
            return {...state,loading:true, error:null};
        case "FETCH_USER_SUCCESS":
            return {...state,loading:false,user:action.payload};
        case "FETCH_USER_FAILURE":
            return {...state,loading:false,user:action.payload};
         default:
            return state;
    }
}


export default userReducer;


   

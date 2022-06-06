import { actionTypes } from "./action";

const initState = {
    isLoading:false,
    data:[],
    isError:false
};

function reducer(state = initState, action) {

    // write code here
     switch(action.type){
        case actionTypes.ADD_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        case actionTypes.ADD_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                data:action.payload,
                isError:false
            }
        case actionTypes.ADD_USER_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        default:
            return state
    }
}

export default reducer;

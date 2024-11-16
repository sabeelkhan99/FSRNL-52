import { useCallback, useReducer } from "react";

// requestFunction : This is a pure function will will make an http call. This does not have any handling
// or information for exceptions, pending state etc.

const httpReducer = (state, action)=>{
    if (action.type == 'SEND') {
        return {
            data: null,
            error: null,
            status: 'pending'
        }
    }

    if (action.type == 'SUCCESS') {
        return {
            data: action.responseData,
            error: null,
            status: 'completed'
        }
    }

    if (action.type == 'ERROR') {
        return {
            data: null,
            error: action.errorMsg,
            status: 'completed'
        }
    }

    return state;
}


const useHttp = (requestFunction, startWithPending=true) => {
    
    const [httpState, dispatch] = useReducer(httpReducer, {
        data: null,
        error: null,
        status: startWithPending ? 'pending' : 'completed'
    });

    const sendRequest = useCallback(async function (requestData) {
        try {
            dispatch({ type: 'SEND' });
            const response = await requestFunction(requestData);
            dispatch({ type: 'SUCCESS', responseData: response.data });
        }
        catch (err) {
            dispatch({ type: 'ERROR' , errorMsg: err || 'something went wrong'});
        }
    }, [requestFunction])

    return {
        sendRequest,
        ...httpState
    }
}

export default useHttp;
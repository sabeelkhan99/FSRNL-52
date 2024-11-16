import React, { createContext, useEffect, useState } from 'react'
import useHttp from '../hooks/useHttp';
import { fetchCurrentLoggedInUser, loginUser, logoutUser } from '../lib/apis';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext({
    isLoggedIn: false,
    login: () => { },
    logout: ()=>{}
});

export const UserContextProvider = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { sendRequest, data, error, status } = useHttp(loginUser, true);
    const { sendRequest: sendLogoutReq, data: logoutData, error: logoutError, status: logoutStatus } = useHttp(logoutUser, true);

    const {
        sendRequest: fetchCurrentUser,
        data: currentUser,
        error: currentUserError,
        status: currentUserReqStatus
    } = useHttp(fetchCurrentLoggedInUser, true);
    
   

    const login = (userCreds) => {
        sendRequest(userCreds);
    }

    const logout = () => {
        sendLogoutReq();
        window.localStorage.setItem('token', "");
        fetchCurrentUser();
        navigate("/login");
    }

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    useEffect(() => {
        if (currentUserReqStatus == 'completed' && currentUserError == null) {
            setIsLoggedIn(true);
        }
        if (currentUserReqStatus == 'completed' && currentUserError != null) {
            setIsLoggedIn(false);
        }
    }, [currentUser, currentUserError])

    useEffect(() => {
        if (status == 'completed' && data) {
            setIsLoggedIn(true);
            window.localStorage.setItem('token', data.token);
            navigate('/');
            toast.success("Logged In Successfully");
        }
        if (status == 'completed' && error) {
            setIsLoggedIn(false);
            navigate('/login');
            toast.error("Please login to continue");
        }
    }, [data, error]);

    const context = {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout
    }

    return <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
}

export default UserContext;

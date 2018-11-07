import { loginUserError, initializeUserLogin } from '../requests';
import { loginUserSuccess, signupUserSuccess,logoutUserSuccess } from '../users';

export const loginUser = (email, password) => {
    return dispatch => {

        const loginPayload = {
            email,
            password
        };

        const loginUrl = 'http://localhost:8080/authenticate';

        dispatch(initializeUserLogin());

        return fetch(loginUrl, {
            method: 'POST', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginPayload)
            
        })
        .then(res => {
            if (res.status === 200) {
                console.log(res)
                res.json().then(data => {
                    dispatch(loginUserSuccess());
                    console.log(data);
                    return true;
                })
            } else {
                dispatch(loginUserError());
                return false;
            }
        })
        .catch(() => {
            dispatch(loginUserError());
            return false;
        })
    }
}

export const signupUser = (email, password) => {
    return dispatch => {
        const signupPayload = {
            email,
            password
        };

        const signupUrl = 'http://localhost:8080/users';

        dispatch(initializeUserLogin());

        return fetch(signupUrl, {
            method: 'POST', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupPayload)
            
        })
        .then(res => {
            if (res.status === 200) {
                console.log(res)
                res.json().then(data => {
                    dispatch(signupUserSuccess());
                    console.log(data);
                    return true;
                })
            } else {
                dispatch(loginUserError());
                return false;
            }
        })
        .catch(() => {
            dispatch(loginUserError());
            return false;
        })
    }
}

export const logoutUser = () => {
    return dispatch => {
        dispatch(logoutUserSuccess());
        return true;
    }
}
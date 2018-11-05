import { loginUserError, initializeUserLogin } from '../requests';
import { loginUserSuccess } from '../users';

export const authUser = (email, password) => {
    return dispatch => {

        const loginPayload = {
            email,
            password
        };

        const url = 'http://localhost:8080/users';

        dispatch(initializeUserLogin());

        return fetch(url, {
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
                    //dispatch(loginUserState(data));
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
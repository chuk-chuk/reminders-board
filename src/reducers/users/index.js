// Actions creator.

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SIGNUP_USER = 'SIGNUP_USER';

export const loginUserSuccess = () => {
    return {
        type: LOGIN_USER
    };
};

export const logoutUserSuccess = () => {
    return {
        type: LOGOUT_USER
    };
};

export const signupUserSuccess = () => {
    return {
        type: SIGNUP_USER
    };
};

// Reducer.

const INITIAL_STATE = {
    loggedIn: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                loggedIn: true
            };
        }

        case LOGOUT_USER: {
            return {
                ...state,
                loggedIn: false
            };
        }

        case SIGNUP_USER: { 
            return {
                ...state,
                loggedIn: true
            };
        }
        
        default: {
            return state;
        }
    }
};
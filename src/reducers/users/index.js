// Actions creator.

export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';

export const logInUser = () => {
    return {
        type: LOGIN_USER
    };
};

export const signUpUser = () => {
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
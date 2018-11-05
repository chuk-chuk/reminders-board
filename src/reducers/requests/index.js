function createAction(type) {
    const action = () => ({ type });
    action.type = type;
    return action;
}

export const initializeUserLogin = createAction('INITIALIZE_USER_LOGIN');
export const loginUserError = createAction('LOGIN_USER_ERROR');

const initialState = {
    error:  false,
    fetching: false,
    response: {}
}

export default function requests(state = initialState, action) {
    switch (action.type) {

        case initializeUserLogin.type: {
            const data = {
                fetching: true
            };

            return { ...state, ...data };
        };

        case loginUserError.type: {
            const data = {
                error: true,
                fetching: false
            }

            return { ...state, ...data };
        }

        default: return state;
    }
}
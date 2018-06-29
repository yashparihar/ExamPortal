const loginReducer = (state = {
    username: "nobody",
    password: "password",
    login_status: false
}, action) => {
    switch (action.type) {
        case "LOG_IN_FULFILLED":
            state = {
                ...state,
                username: action.payload.username,
                password: state.password,
                login_status: action.payload.status
            }
            break;
        case "LOG_OUT":
            state = {
                ...state,
                login_status: false
            }
            break;
        case "ERROR":
            state = {
                ...state,
            }
            break;
    }
    return state;
};

export default loginReducer;

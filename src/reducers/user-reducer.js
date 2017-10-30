

const defaultState = {
    users: [],
    user: {email:{}},
    loading: false,
    errors: {}
}

export default (state=defaultState, action={}) => {
    switch (action.type) {
        case 'AUTHENTICATE_USER_REJECTED':{
            const data = action.payload.response.data;
            // convert feathers error formatting to match client-side error formatting
            let email = {}, password = {};
            email.message = "";
            password.message = data.message;

            const errors = { global: data.message, email,password };
            return { ...state, authenticated: false, errors: errors, loading: false };
        }
        case 'AUTHENTICATE_USER_FULFILLED': {
            var res = action.payload.response;
            localStorage.setItem('user', res.data.accessToken);
            action.history.push('/secret');
            return {
                ...state,
                authenticated: true,
                errors: {},
                loading: false
            }
        }
        case 'FETCH_USERS': {
            return {
                ...state,
                users: action.payload
            }
        }
        case "FETCH_USERS_FULFILLED": {
            return {
                ...state,
                users: action.payload.data.data || action.payload.data // in case pagination is disabled
            }
        }
        case 'NEW_USER': {
            return {
                ...state,
                user: {email:{}}
            }
        }

        case 'SAVE_USER_PENDING': {
            return {
                ...state,
                loading: true
            }
        }

        case 'SAVE_USER_FULFILLED': {
            return {
                ...state,
                users: [...state.users, action.payload.data],
                errors: {},
                loading: false
            }
        }

        case 'SAVE_USER_REJECTED': {
            const data = action.payload.response.data;
            // convert feathers error formatting to match client-side error formatting
            let { email,employeeNo, password } = data.errors;
            var i = data.message.indexOf(':');
            var message = data.message.slice(i);
            if(email && typeof email !== 'object'){
                var i = data.message.indexOf(':');
                email = {message: "\"Email"+message}
            }
            if(employeeNo && typeof employeeNo !== 'object'){
                employeeNo = {message: "\"Employee No"+message}
            }
            if(password && typeof password !== 'object'){
                password = {message: "\"Password"+message}
            }
            const errors = { global: data.message, email, employeeNo, password };
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }
        case 'FETCH_USER_PENDING': {
            return {
                ...state,
                loading: true,
                user: {email:{}}
            }
        }

        case 'FETCH_USER_FULFILLED': {
            return {
                ...state,
                user: action.payload.data,
                errors: {},
                loading: false
            }
        }

        case 'UPDATE_USER_PENDING': {
            return {
                ...state,
                loading: true
            }
        }

        case 'UPDATE_USER_FULFILLED': {
            const user = action.payload.data;
            return {
                ...state,
                users: state.users.map(item => item._id === user._id ? user : item),
                errors: {},
                loading: false
            }
        }

        case 'UPDATE_USER_REJECTED': {
            const data = action.payload.response.data;
            const { email, employeeNo, password } = data.errors;
            const errors = { global: data.message, email, employeeNo, password };
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }
        case 'DELETE_USER_FULFILLED': {
            const _id = action.payload.data._id;
            return {
                ...state,
                users: state.users.filter(item => item._id !== _id)
            }
        }

        default:
            return state;
    }
}
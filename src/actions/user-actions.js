import { client } from './';

const url = '/users';

export function authenticateUser({ email, password }, history) {
    return  dispatch => {
        return dispatch({
            type: 'AUTHENTICATE_USER',
            payload: client.post('/authentication', { "strategy": "local", email, password }),
            history: history
        })
    }
}

export function logoutUser(){
    return dispatch => {
        dispatch({
            type: 'LOGOUT_USER'
        })
    }
}

export function fetchUsers(){
    return dispatch => {
        dispatch({
            type: 'FETCH_USERS',
            payload: client.get(url)
        })
    }
}

export function newUser() {
    return dispatch => {
        dispatch({
            type: 'NEW_USER'
        })
    }
}

export function saveUser(contact) {
    return dispatch => {
        return dispatch({
            type: 'SAVE_USER',
            payload: client.post(url, contact)
        })
    }
}

export function fetchUser(_id) {
    return dispatch => {
        return dispatch({
            type: 'FETCH_USER',
            payload: client.get(`${url}/${_id}`)
        })
    }
}

export function updateUser(contact) {
    return dispatch => {
        return dispatch({
            type: 'UPDATE_USER',
            payload: client.put(`${url}/${contact._id}`, contact)
        })
    }
}

export function deleteUser(_id) {
    return dispatch => {
        return dispatch({
            type: 'DELETE_USER',
            payload: client.delete(`${url}/${_id}`)
        })
    }
}
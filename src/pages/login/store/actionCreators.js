import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})

export const login = (account, password) => {
    return async dispatch => {
        const res = await axios.get(`/api/login.json?account=${account}&password=${password}`).catch(e => console.log(e));
        const result = res.data.data;
        if (result) {
            dispatch(changeLogin());
        } else {
            alert('Log in failed')
        }

    }
}
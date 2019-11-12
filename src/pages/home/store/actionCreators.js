import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const changeHome = data => ({
    type: constants.CHANGE_HOME,
    data: data,
})

export const addHomeList = (data, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(data), 
    nextPage
})


export const getHomeData = () => {
    return async dispatch => {
       const response = await axios.get('/api/home.json')
        .catch(err => console.log(err));
       const data = response.data.data;
       const action = changeHome(data);
       dispatch(action);
    }
}

export const getMoreList = page => {
    return async dispatch => {
        const response = await axios.get(`/api/homeList.json?page=${page}`)
        .catch(err => console.log(err));
        const data = response.data.data;
        const action = addHomeList(data, page + 1);
        dispatch(action);
    }
}

export const toggleTopShow = show => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show, 
})
import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';


// 因为在 reducer 里面用了 immutable 对象， 所以在这里也必须把数据转换成immutable的
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})

export const mouseLeave =() => ({
    type: constants.MOUSE_LEAVE
})

export const changePage =(page) => ({
    type: constants.CHANGE_PAGE,
    page
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
}
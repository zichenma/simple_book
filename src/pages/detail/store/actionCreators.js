import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content,
})

export const getDetail = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/detail.json').catch(err => console.log(err));
        const result = res.data.data;
        dispatch(changeDetail(result.title, result.content));
    }
}
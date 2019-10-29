import * as constants from './constants';
import axios from 'axios';

export const changeHome = data => ({
    type: constants.CHANGE_HOME,
    data: data,
})

export const getHomeData = () => {
    return async dispatch => {
       const response = await axios.get('/api/home.json')
        .catch(err => console.log(err))
       const data = response.data.data;
       const action = changeHome(data);
       dispatch(action);
    }
}
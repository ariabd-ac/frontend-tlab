import Axios from 'axios';

export const setDataBooks = () => (dispatch) => {
  Axios.get(`http://localhost:5000/v1/books`)
    .then((result) => {
      const responseAPI = result.data;
      dispatch({ type: 'UPDATE_DATA_BOOK', payload: responseAPI.data });
    })
    .catch((err) => {
      console.log('Eorr disini: ', err);
    });
};

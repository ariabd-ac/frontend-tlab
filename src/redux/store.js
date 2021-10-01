import thunk from 'redux-thunk';
const { createStore, combineReducers, applyMiddleware } = require('redux');

const initialStateHome = {
  dataBooks: [],
  name: 'Ari',
};

const initialState = {
  form: {
    isbn: '',
    title: '',
    author: '',
    publisher_name: '',
    publisher_year: null,
    genre: '',
    synopsis: '',
    status: true,
  },
};

const homeReducer = (state = initialStateHome, action) => {
  if (action.type === 'UPDATE_DATA_BOOK') {
    return {
      ...state,
      dataBooks: action.payload,
    };
  }
  if (action.type === 'UPDATE_PAGE') {
    return {
      ...state,
      page: action.payload,
    };
  }
  return state;
};

const createBooksReducer = (state = initialState, action) => {
  if (action.type === 'SET_FORM_DATA') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.formType]: action.formValue,
      },
    };
  }

  return state;
};

const reducer = combineReducers({ homeReducer, createBooksReducer });

const store = createStore(reducer, applyMiddleware(thunk));
// const store = createStore(homeReducer);

export default store;

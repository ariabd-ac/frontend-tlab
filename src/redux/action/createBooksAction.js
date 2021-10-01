import Axios from 'axios';
import { useHistory } from 'react-router';

export const setForm = (formType, formValue) => {
  return { type: 'SET_FORM_DATA', formType, formValue };
};

export const PostToApi = (form) => {
  Axios.post(
    'http://localhost:5000/v1/books/post',
    {
      isbn: form.isbn,
      title: form.title,
      author: form.author,
      publisher_name: form.publisher_name,
      publisher_year: form.publisher_year,
      genre: form.genre,
      synopsis: form.synopsis,
      status: form.status,
    },
    {
      headers: {
        'content-Type': 'application/json',
      },
    }
  )
    .then((e) => {
      console.log('Succes', e);
    })
    .catch((err) => {
      console.log('error: ', err.response);
    });
};

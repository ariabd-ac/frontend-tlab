import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';

import UserHeader from '../components/Headers/UserHeader.js';
import { setForm, PostToApi } from '../redux/action';
import { useHistory, withRouter, Redirect } from 'react-router';
import { useEffect, useState } from 'react';

const CreateBook = (props) => {
  const history = useHistory();
  const { form } = useSelector((state) => state.createBooksReducer);
  const {
    isbn,
    title,
    author,
    publisher_name,
    publisher_year,
    genre,
    synopsis,
    status,
  } = form;
  const dispatch = useDispatch();

  const [buttonName, setButtonName] = useState('Simpan');

  useEffect(() => {
    console.log('param: ', props);
    const id = props.match.params.id;
    if (props.match.params.id) {
      setButtonName('Update');
      Axios.get(`http://localhost:5000/v1/books/${id}`)
        .then((res) => {
          const data = res.data.data;
          console.log('data', data);
          dispatch(setForm('isbn', data.isbn));
          dispatch(setForm('title', data.title));
          dispatch(setForm('author', data.author));
          dispatch(setForm('publisher_name', data.publisher_name));
          dispatch(setForm('publisher_year', data.publisher_year));
          dispatch(setForm('genre', data.genre));
          dispatch(setForm('synopsis', data.synopsis));
          dispatch(setForm('status', data.status));
        })
        .catch((err) => console.log('err', err));
    }
  }, [props]);

  const onSubmit = () => {
    // PostToApi(form);
    if (buttonName === 'Simpan') {
      Axios.post(
        'http://localhost:5000/v1/books/post',
        {
          isbn: isbn,
          title: title,
          author: author,
          publisher_name: publisher_name,
          publisher_year: publisher_year,
          genre: genre,
          synopsis: synopsis,
          status: status,
        },
        {
          headers: {
            'content-Type': 'application/json',
          },
        }
      )
        .then((e) => {
          console.log('Succes', e);
          history.push('list-books');
        })
        .catch((err) => {
          console.log('error: ', err.response);
        });
    } else {
      const id = props.match.params.id;
      Axios.put(
        `http://localhost:5000/v1/books/post/${id}`,
        {
          isbn: isbn,
          title: title,
          author: author,
          publisher_name: publisher_name,
          publisher_year: publisher_year,
          genre: genre,
          synopsis: synopsis,
          status: status,
        },
        {
          headers: {
            'content-Type': 'application/json',
          },
        }
      )
        .then((e) => {
          console.log('Succes', e);
          history.push('/');
        })
        .catch((err) => {
          console.log('error: ', err.response);
        });
    }
  };

  return (
    <>
      {/* Page content */}
      <Container className='mt-7' fluid>
        <Row>
          <Col className='order-xl-1' xl='12'>
            <Card className='bg-secondary shadow'>
              <CardHeader className='bg-white border-0'>
                <Row className='align-items-center'>
                  <Col xs='8'>
                    <h3 className='mb-0'>{buttonName} Buku</h3>
                  </Col>
                  <Col className='text-right' xs='4'></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <h6 className='heading-small text-muted mb-4'>
                  Information Book
                </h6>
                <div className='pl-lg-4'>
                  <Row>
                    <Col lg='6'>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='input-username'>
                          ISBN
                        </label>
                        <Input
                          className='form-control-alternative'
                          id='isbn'
                          type='text'
                          value={isbn}
                          onChange={(e) =>
                            dispatch(setForm('isbn', e.target.value))
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col lg='6'>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='input-email'>
                          Title
                        </label>
                        <Input
                          className='form-control-alternative'
                          id='input-email'
                          type='text'
                          value={title}
                          onChange={(e) =>
                            dispatch(setForm('title', e.target.value))
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg='6'>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='input-first-name'>
                          Author
                        </label>
                        <Input
                          className='form-control-alternative'
                          id='input-first-name'
                          type='text'
                          value={author}
                          onChange={(e) =>
                            dispatch(setForm('author', e.target.value))
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col lg='6'>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='input-last-name'>
                          Publisher Name
                        </label>
                        <Input
                          className='form-control-alternative'
                          id='input-last-name'
                          type='text'
                          value={publisher_name}
                          onChange={(e) =>
                            dispatch(setForm('publisher_name', e.target.value))
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                {/* <hr className='my-4' /> */}
                {/* Address */}
                {/* <h6 className='heading-small text-muted mb-4'>
                    Contact information
                  </h6> */}
                <div className='pl-lg-4'>
                  <Row>
                    <Col md='6'>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='input-address'>
                          Publisher Year
                        </label>
                        <Input
                          className='form-control-alternative'
                          id='input-address'
                          type='number'
                          value={publisher_year}
                          onChange={(e) =>
                            dispatch(setForm('publisher_year', e.target.value))
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col lg='6'>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='input-city'>
                          Genre
                        </label>
                        <Input
                          className='form-control-alternative'
                          id='input-city'
                          type='text'
                          value={genre}
                          onChange={(e) =>
                            dispatch(setForm('genre', e.target.value))
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row></Row>
                </div>
                {/* <hr className='my-4' /> */}
                {/* Description */}
                {/* <h6 className='heading-small text-muted mb-4'>About me</h6> */}
                <div className='pl-lg-4'>
                  <FormGroup>
                    <label>Synopsis</label>
                    <Input
                      className='form-control-alternative'
                      rows='4'
                      type='textarea'
                      value={synopsis}
                      onChange={(e) =>
                        dispatch(setForm('synopsis', e.target.value))
                      }
                    />
                  </FormGroup>
                  <Row>
                    <Col md='3'>
                      <Button
                        color='primary'
                        type='submit'
                        onClick={onSubmit}
                        size='sm'>
                        {buttonName}
                      </Button>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(CreateBook);

import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from 'reactstrap';
import { setDataBooks } from '../redux/action';

const Books = () => {
  // const [dataBook, setDataBooks] = useState([]);
  const history = useHistory();
  const { dataBooks } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  console.log('state global: ', dataBooks);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setDataBooks());
    }, 1000);
  }, [dispatch]);

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
                    <Button
                      color='primary'
                      onClick={() => history.push('tambah')}
                      size='sm'>
                      CREATE
                    </Button>
                  </Col>
                  <Col className='text-right' xs='4'></Col>
                </Row>
              </CardHeader>
              {dataBooks.map((book) => {
                return (
                  <>
                    <CardBody>
                      <div className='pl-lg-4'>
                        <Row>
                          <Col lg='6'>
                            <FormGroup>
                              <label
                                className='form-control-label'
                                htmlFor='input-email'>
                                ISBN
                              </label>
                              <h3>{book.isbn}</h3>
                            </FormGroup>
                          </Col>
                          <Col lg='6'>
                            <FormGroup>
                              <label
                                className='form-control-label'
                                htmlFor='input-email'>
                                Title
                              </label>
                              <h3>{book.title}</h3>
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
                              <h3>{book.author}</h3>
                            </FormGroup>
                          </Col>
                          <Col lg='6'>
                            <FormGroup>
                              <label
                                className='form-control-label'
                                htmlFor='input-last-name'>
                                Publisher Name
                              </label>
                              <h3>{book.publisher_name}</h3>
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
                              <h3> {book.publisher_year}</h3>
                            </FormGroup>
                          </Col>
                          <Col lg='6'>
                            <FormGroup>
                              <label
                                className='form-control-label'
                                htmlFor='input-city'>
                                Genre
                              </label>
                              <h3>{book.genre}</h3>
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
                            value={book.synopsis}
                          />
                        </FormGroup>
                        <Row>
                          <Col md='1'>
                            <Button
                              color='primary'
                              type='submit'
                              size='sm'
                              onClick={() =>
                                history.push(`detail-books/${book._id}`)
                              }>
                              Detail
                            </Button>
                          </Col>
                          <Col md='1'>
                            <Button
                              color='danger'
                              type='submit'
                              size='sm'
                              onClick={() => history.push(`hapus/${book._id}`)}>
                              Hapus
                            </Button>
                          </Col>
                          <Col md='1'>
                            <Button
                              color='info'
                              type='submit'
                              size='sm'
                              onClick={() =>
                                history.push(`tambah/${book._id}`)
                              }>
                              Edit
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </CardBody>
                  </>
                );
              })}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Books;

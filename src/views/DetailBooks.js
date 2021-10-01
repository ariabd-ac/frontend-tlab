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
import { useHistory, withRouter } from 'react-router';
import { useEffect, useState } from 'react';

const DetailBooks = (props) => {
  const history = useHistory();
  const { dataBooks } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  const [data, setData] = useState({});

  console.log('Data:', data);
  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`http://localhost:5000/v1/books/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {});
    // console.log('params:', props);
  }, []);

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
                    <h3 className='mb-0'>Detail Buku</h3>
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
                          value={data.isbn}
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
                          value={data.title}
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
                          value={data.author}
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
                          value={data.publisher_name}
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
                          value={data.publisher_year}
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
                          value={data.genre}
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
                      value={data.synopsis}
                    />
                  </FormGroup>
                  <Row>
                    <Col md='3'>
                      <Button
                        color='primary'
                        type='submit'
                        size='sm'
                        onClick={() => history.push('/')}>
                        BACK
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

export default withRouter(DetailBooks);

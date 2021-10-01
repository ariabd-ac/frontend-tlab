import { Button, Container, Row, Col } from 'reactstrap';

const UserHeader = () => {
  return (
    <>
      <div
        className='header pb-3 pt-5 pt-lg-8 d-flex align-items-center'
        style={{
          minHeight: '600px',
          backgroundImage: 'url(``)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}>
        {/* Mask */}
        <span className='mask bg-gradient-default opacity-8' />
        {/* Header container */}
        <Container className='d-flex align-items-center' fluid>
          <Row>
            <Col lg='7' md='10'></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;

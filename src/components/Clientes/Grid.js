import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardCliene from '../Main'
import CardProduct from '../../components/Info'
import FormProduct from './FormProduct';
import Buscador from './Buscador';
function AutoLayoutExample() {
  return (
    <Container>
    <Row md={8}>
      <Col>{<FormProduct/>}</Col>
      <Col md={6}>{<Buscador/>}</Col>
    </Row>
  </Container>
  );
}

export default AutoLayoutExample;
import { HashLink as Link } from "react-router-hash-link";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Main () {
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <h1>Gallery</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde, explicabo eligendi quidem saepe officia provident quibusdam autem optio amet nemo tempora dolores doloremque et? Sequi reprehenderit omnis necessitatibus totam.</p>
            <Link to="/#gallery"><Button>See Gallery</Button></Link>
          </Col>
        </Row>
      </Container>
    </main>
  )
}
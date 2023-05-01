import { Container, Row, Col } from 'react-bootstrap'
import Panel from './Panel.jsx'
import data from '../../data/gallery.json'

export default function List () {
  return(
    <section>
      <Container id='gallery'>
        <Row>
          <Col><h2 className='text-center'>My Collection</h2></Col>
        </Row>
        <Row className='justify-content-center'>
          {
            data.map(
              (element) => (
                element //if element exists, load it to Panel, otherwise say loading...
                  ? <Panel data={element} />
                  : <p>Loading...</p>
              )
            )
          }
      </Row>
    </Container>
    </section>
  )
}
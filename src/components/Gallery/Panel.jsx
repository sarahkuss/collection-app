import { Col, Card, Image } from "react-bootstrap";

export default function Panel ({data: {id, species, commonName, type, description, careReqs, toxicity, image }}) {
  return(
    <Col key={id} sm={10} md={6} lg={4}>
      <Card className="p-3 mb-2">
        <figure>
          <Image src={image} fluid />
        </figure>
        <div className="content">
          <h3>{commonName}</h3>
          <p><em>{species}</em></p>
          <p>{description}</p>
        </div>
      
      </Card>
    </Col>
  )
}

//each element requires a unique key
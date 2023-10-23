import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent() {
  return (
    // Rendering for the first card component
    <Card style={{ width: '18rem' }}>

        {/* Below is code for the heading in card Component */}
         <Card.Header as="h5">Action,Sex,Drug</Card.Header>
      <Card.Img variant="top" src="../images/Power.png" />
      <Card.Body>
        <Card.Title>Power</Card.Title>
        <Card.Text>
          A successful New York entrepreneur lives a double life as the head of a drug empire that serves only the rich and influential, all while wanting to escape the underworld and keep his family safe.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
  );
}

export default CardComponent;
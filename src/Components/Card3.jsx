import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponents() {
  return (
    // Rendering for the third card Component
    <Card style={{ width: '18rem' }}>

        {/* Below is code for the heading in card Component */}
        <Card.Header as="h5">Cloud, Afterlife</Card.Header>  
      <Card.Img variant="top" src="../images/upload.png" />
      <Card.Body>
        <Card.Title>Upload</Card.Title>
        <Card.Text>
        Synopsis
In 2033, people who are near death can be “uploaded” into virtual reality hotels run by 6 tech firms. Cash-strapped Nora lives in Brooklyn and works customer service for the luxurious “Lakeview” digital a
fterlife. When L.A. party-boy/coder Nathan’s self-driving car crashes, his high-maintenance girlfriend uploads him permanently into Nora’s VR world.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
  );
}

export default CardComponents;
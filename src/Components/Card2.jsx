import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardsComponent() {
  return (
    // Renderirng for the second card component
    <Card style={{ width: '18rem' }}>

      {/* Below is code for the heading in card Component */}
        <Card.Header as="h5">finace, Money</Card.Header>
      <Card.Img variant="top" src="../images/Billions.png" />
      <Card.Body>
        <Card.Title>Billions</Card.Title>
        <Card.Text>
            A complex drama about power politics in the world of New York high finance.Shrewd, savvy U.S. Attorney Chuck Rhoades and the brilliant, ambitious hedge fund king Bobby “Axe” Axelrod are on an explosive collision course, with each using all of his considerable smarts, power and influence to outmaneuver the other. 
            The stakes are in the billions in this timely, provocative series.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
  );
}

export default CardsComponent;
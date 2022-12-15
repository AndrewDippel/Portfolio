import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleProject(props) {
    return (
        <Card style={{width: '40%'}}>
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Button variant="link" href={props.link} target='_blank'>Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default SingleProject;
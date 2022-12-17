import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleProject(props) {
    return (
        <Card style={{ width: '40%' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Button variant="link" href={props.link} target='_blank'>View Project</Button>
                <Button variant="link" href={props.githublink} target='_blank'>View github</Button>
            </Card.Body>
        </Card>
    );
}

export default SingleProject;
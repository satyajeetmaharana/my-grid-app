
import Card from 'react-bootstrap/Card';
import './CustomCard.css';

export default function CustomCard(props) {
    const item = props.item;
    const onClick = () => {
        if(item.linked_resource){
            console.log("This is where we should be routing to the details page");
        }
    };
    return (
        <>
            <Card className="item" onClick={onClick}>
                <Card.Img variant="top" src={require(`../assets/184.png`)}/>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
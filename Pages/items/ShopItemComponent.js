

import { Button, Row, Container, Col } from 'react-bootstrap';
class ShopItemComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.item)
    }



    render() {
        return (
            <div style={{ padding: "20px", width: "100%", minHeight: "94vh" }}>
                <h1 style={{ textAlign: "center" }}>This is the item {this.props.item.name}</h1>
                <p>Koster kun {this.props.item.price},-</p>
                <Container>
                    <Row>
                        <Col>
                            <Button variant="primary">Buy Now</Button>
                        </Col>
                        <Col>
                            <Button variant="primary">Add to cart</Button>
                        </Col>
                    </Row>
                </Container>


            </div>
        );
    }
}
export default ShopItemComponent
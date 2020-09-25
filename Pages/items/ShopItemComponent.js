import Button from 'react-bootstrap/Button';
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
                <Button variant="primary">Buy</Button>{' '}
            </div>
        );
    }
}
export default ShopItemComponent
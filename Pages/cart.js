import Layout from '../Components/Layout';
import ShopItemList from '../Components/ShopItemList';

class Cart extends React.Component {

    render() {
        return (
            <Layout>
                <h1 style={headerText}>Shopping Cart</h1>
            </Layout>
        );
    }
}
const headerText = {
    textAlign: "center",
    padding: "20px"
}
export default Cart;
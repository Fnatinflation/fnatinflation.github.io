import Layout from '../Components/Layout';
import ShopItemList from '../Components/ShopItemList';

class Items extends React.Component {

    render() {
        return (
            <Layout>
                <h1 style={headerText}>Shop</h1>
                <ShopItemList></ShopItemList>
            </Layout>
        );
    }
}
const headerText = {
    textAlign: "center",
    padding: "20px"
}
export default Items;
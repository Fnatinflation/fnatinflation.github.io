import Layout from '../Components/Layout';
import Form from '../Components/Form';
import Post from '../Components/Post';
import SensorValueComponent from '../Components/SensorValueComponent';
class Skole extends React.Component {

    render() {
        return (
            <Layout>
                <h1 style={headerText}>Skole</h1>
                <SensorValueComponent></SensorValueComponent>
            </Layout>
        );
    }
}
const headerText = {
    textAlign: "center",
    padding: "20px"
}
export default Skole;
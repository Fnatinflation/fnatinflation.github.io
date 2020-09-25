import Layout from '../Components/Layout';
import Form from '../Components/Form';
import Post from '../Components/PostList';
import SensorValueComponent from '../Components/SensorValueComponent';
class Skole extends React.Component {

    render() {
        return (
            <Layout>
                <h1 style={headerText}>Skole</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <SensorValueComponent></SensorValueComponent>
                </div>

            </Layout>
        );
    }
}
const headerText = {
    textAlign: "center",
    padding: "20px"
}
export default Skole;
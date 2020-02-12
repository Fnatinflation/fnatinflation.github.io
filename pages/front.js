import Layout from '../Components/Layout';
import SpotifyComponent from '../Components/SpotifyComponent';
class Front extends React.Component {
    render() {
        return (
            <Layout>
                <div style={frontStyle}>
                    <h1>Kæmpe legende</h1>
                    <SpotifyComponent />
                </div>
            </Layout>

        );
    }
}
const frontStyle = {
    padding: 20,
    height:"95vh",
    overflow:"hidden",
    textAlign: "center"
}
export default Front;
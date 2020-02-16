import Layout from '../Components/Layout';
import SpotifyComponent from '../Components/SpotifyComponent';
import ChatForm from '../Components/ChatForm';
import ChatMessages from '../Components/ChatMessages';
import firebase from 'firebase'

class Front extends React.Component {

    render() {
        return (
            <Layout>
                <div style={frontStyle}>
                    <h1>Kæmpe legende</h1>
                    <SpotifyComponent />
                    <br></br>
                    <ChatForm />
                    <ChatMessages />
                </div>
            </Layout>
        );
    }
}
const frontStyle = {
    padding: 20,
    overflow: "hidden",
    textAlign: "center"
}
export default Front;
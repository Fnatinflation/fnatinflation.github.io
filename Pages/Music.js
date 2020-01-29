import Header from '../components/Header';
import Layout from '../Components/Layout';
import Form from '../Components/Form';
import Post from '../Components/Post';
class Music extends React.Component {

    render() {
        return (
            <Layout>
                <p>Tilføj post</p>
                <Form/>
                <Post></Post>
            </Layout>
        );
    }
}
export default Music;
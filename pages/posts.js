import Header from '../components/Header';
import Layout from '../Components/Layout';
import Form from '../Components/Form';
import Post from '../Components/Post';
class Posts extends React.Component {

    render() {
        return (
            <Layout>
                <h1 style={headerText}>Posts</h1>
                <Post></Post>
                <Form/>
            </Layout>
        );
    }
}
const headerText = {
    textAlign: "center",
    padding: "20px"
}
export default Posts;
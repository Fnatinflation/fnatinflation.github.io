import Header from '../components/Header';
import Layout from '../Components/Layout';
import Form from '../Components/Form';
import Post from '../Components/Post';
class Posts extends React.Component {

    render() {
        return (
            <Layout>
                <Post></Post>
                <Form/>
            </Layout>
        );
    }
}
export default Posts;
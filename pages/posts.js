import Layout from '../Components/Layout';
import Form from '../Components/Form';
import PostList from '../Components/PostList';
class Posts extends React.Component {

    render() {
        return (
            <Layout>
                <h1 style={headerText}>Posts</h1>
                <PostList></PostList>
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
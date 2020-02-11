import firebase from 'firebase';
import firestore from "./Firestore";


class PostComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        firebase
            .firestore()
            .collection("posts")
            .get()
            .then(querySnapshot => {
                const posts = [];

                querySnapshot.forEach(function (doc) {
                    posts.push({
                        topic: doc.data().topic,
                        subject: doc.data().subject,
                    });
                });

                this.setState({ posts });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }

    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}
export default PostComponent
import firebase from 'firebase';
import firestore from "../../Components/Firestore";


class PostComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            subject: '',
            url: ''
        }
    }

    componentDidMount() {
        console.log(this.props.title)
        firebase
            .firestore()
            .collection("posts")
            .doc(String(this.props.title))
            .get()
            .then((doc) => {
                this.setState({
                    topic: doc.data().topic,
                    subject: doc.data().subject,
                    url: doc.data().url
                })
            }
            )
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }

    render() {
        return (
            <div style={{ padding: "20px",width:"100%",minHeight:"94vh" }}>
                <h1 style={{ textAlign: "center" }}>{this.state.topic}</h1>
                <img style={{ width: "100%" }} src={this.state.url}></img>
                <p style={{textAlign:"left"}}>{this.state.subject}</p>
            </div>
        );
    }
}
export default PostComponent
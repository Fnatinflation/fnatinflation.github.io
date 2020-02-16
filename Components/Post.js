import React from 'react';
import firebase from 'firebase'
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '@firebase/storage';


const PostLink = props => (
    <Link href="/posts/[id]" as={`/posts/${props.id}`}>
        <a>{props.id}</a>
    </Link>
);

const postStyle = {
    flex: "0 0 32%",
    height: "300px",
    wordWrap: "break-word",
    paddingBottom: "5px"
}
const container = {
    display: "flex",
    flexWrap: "wrap",
    padding: "5px",
    justifyContent: "space-around"
}
const textStyle = {
    padding: "20px",
    border: '3px solid #DDD',
    borderColor: "#737373",
    borderTop: "none",
    height: "60%",
    width: "100%",
    textAlign: "left",
    display: "inline-block",
}

class PostList extends React.Component {
    state = { posts: [], url: "", imageUrls: [] };

    componentDidMount() {
        const storage = firebase.storage()

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
                const images = [];
                console.log(this.state.posts.length)

                for (var i = 0; i < this.state.posts.length; i++) {
                    console.log(this.state.posts[i].topic)
                    storage
                        .ref("images")
                        .child(this.state.posts[i].topic)
                        .getDownloadURL()
                        .then(url => {
                            images.push({
                                url: url
                            });
                            this.setState({ imageUrls: images })
                        }
                        );
                }
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });

    }

    render() {
        let columns = [];

        this.state.posts.map((v, i) => {

            columns.push(
                <Link href="/posts/[id]" as={`/posts/${v.topic}`}>
                    <div key={i} id="postDiv" style={postStyle}>
                        <div style={{ height: "40%", border: '3px solid #DDD', borderColor: "#737373", padding: "0px" }}>
                            <img style={{ marginLeft: "auto", marginRight: "auto", width: "100%", height: "100%" }} src={this.state.url}></img>
                        </div>
                        <div style={textStyle}>
                            <h1 style={{ textAlign: "center", fontSize: "18px" }}>
                                {v.topic}
                            </h1>
                            <div style={{ overflow: "hidden", textOverflow: "ellipsis", height: "80%" }}>
                                <p>
                                    {v.subject}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link >
            )
        })
        {/* Fill the rest of the row with empty space*/ }
        if (columns.length % 3 === 1) {
            columns.push(<div style={postStyle}></div>)
            columns.push(<div style={postStyle}></div>)
        } else if (columns.length % 3 == 2) {
            columns.push(<div style={postStyle}></div>)
        }
        return (
            <div style={container}>
                {columns}
            </div>
        );
    }
}
export default PostList;
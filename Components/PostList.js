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
    height: "200px",
    wordWrap: "break-word",
    padding:"10px"
}
const container = {
    marginLeft:"10px",
    marginRight:"10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
}
const textStyle = {
    height: "10%",
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
                        url: doc.data().url
                    });
                });

                this.setState({ posts });
                console.log(this.state.posts.length)

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
                        <div style={{ height: "90%", padding: "0px" }}>
                            <img style={{ marginLeft: "auto", marginRight: "auto", width: "100%", height: "100%" }} src={v.url}></img>
                        </div>
                        <div style={textStyle}>
                            <h1 style={{fontSize: "16px" }}>
                                {v.topic}
                            </h1>
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
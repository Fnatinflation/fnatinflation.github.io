import React from 'react';
import firebase from 'firebase'
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PostLink = props => (
    <Link href="/posts/[id]" as={`/posts/${props.id}`}>
        <a>{props.id}</a>
    </Link>
);

const postStyle = {
    margin: 20,
    padding: 0,
    height: "500px",
    wordWrap: "break-word"

}
class PostList extends React.Component {
    state = { posts: [] };

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
        let columns = [];
        this.state.posts.map((v, i) => {
            columns.push(
                <Col style={{cursor:"pointer"}}>
                    <Link href="/posts/[id]" as={`/posts/${v.topic}`}>
                        <div key={i} id="postDiv" style={postStyle}>
                            <div style={{  height: "50%", border: '3px solid #DDD', borderColor: "#737373", padding: "0px" }}>
                                <img style={{ marginLeft: "auto", marginRight: "auto", width: "100%", height: "100%" }} src="data:image/jpeg;base64,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"></img>
                            </div>
                            <div style={{
                                padding: "20px",
                                border: '3px solid #DDD',
                                borderColor: "#737373",
                                borderTop: "none",
                                height: "50%",
                                width: "100%",
                                textAlign: "left",
                                display: "inline-block",
                                backgroundColor: "#D9D9D9"
                            }}>
                                <h1 style={{ textAlign: "center" }}>
                                    {v.topic}
                                </h1>
                                <div style={{ overflow: "hidden", textOverflow: "ellipsis", height: "50%" }}>
                                    <p>
                                        {v.subject}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Link>
                </Col>
            )

            if ((i + 1) % 3 === 0) {
                console.log("række")
                columns.push(<div className="w-100"></div>)
            }
            if (this.state.posts.length === columns.length) {
                console.log("hej")
                if (columns.length % 3 === 1) {
                    columns.push(
                        <Col>
                            <div key={i} id="postDiv" style={postStyle, { visibility: "hidden" }}>

                            </div>
                        </Col>
                    )
                }
                if (columns.length % 3 === 2) {
                    columns.push(
                        <Col>
                            <div key={i} id="postDiv" style={postStyle, { visibility: "hidden" }}>

                            </div>
                        </Col>
                    )
                }
            }
        })
        return (
            <di>
                <Row>
                    {columns}
                </Row>
            </di>
        );
    }
}
export default PostList;
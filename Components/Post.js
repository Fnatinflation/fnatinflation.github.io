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
                                <img style={{ marginLeft: "auto", marginRight: "auto", width: "100%", height: "100%" }} src='https://bt.bmcdn.dk/media/cache/resolve/image_1240/image/133/1332480/22994689-.jpg'></img>
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
                            }}>
                                <h1 style={{ textAlign: "center",fontSize:"18px" }}>
                                    {v.topic}
                                </h1>
                                <div style={{ overflow: "hidden", textOverflow: "ellipsis", height: "80%" }}>
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
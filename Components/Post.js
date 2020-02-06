import React from 'react';
import firebase from 'firebase'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
                <Col>
                    <div key={i} id="postDiv" style={postStyle}>
                        <div style={{ height: "50%", border: '3px solid #DDD', borderColor: "#737373", padding: "0px" }}>
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
                </Col>
            )

            if ((i + 1) % 3 === 0) {
                console.log("række")
                columns.push(<div className="w-100"></div>)
            }
            if (this.state.posts.length === columns.length) {
                console.log("hej")
                if (columns.length%3===1){
                    columns.push(
                        <Col>
                            <div key={i} id="postDiv" style={postStyle,{visibility: "hidden"}}>
                                
                            </div>
                        </Col>
                    )
                }
                if (columns.length%3===2){
                    columns.push(
                        <Col>
                            <div key={i} id="postDiv" style={postStyle,{visibility: "hidden"}}>
                                
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
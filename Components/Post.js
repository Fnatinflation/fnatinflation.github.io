import React from 'react';
import firebase from 'firebase'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const postStyle = {
    margin: 20,
    padding: 20,
    border: '3px solid #DDD',
    height: "500px"

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
                        <h1 style={{textAlign:"center"}}>
                            {v.topic}
                        </h1>
                        <br></br>
                        <p>
                            {v.subject}
                        </p>
                    </div>
                </Col>
            )

            if ((i + 1) % 3 === 0) {
                columns.push(<div className="w-100"></div>)
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
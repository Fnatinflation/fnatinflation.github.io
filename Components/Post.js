import React from 'react';
import firebase from 'firebase'
const postStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
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
        return (
            <div>
                {this.state.posts.map((v, i) => {
                    return (
                        <div key={i} id="postDiv" style={postStyle}>
                            <h1>
                                {v.topic}
                            </h1>
                            <br></br>
                            <p>
                                {v.subject}
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default PostList;
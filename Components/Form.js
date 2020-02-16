import React from 'react';
import firestore from "./Firestore";
import firebase from 'firebase';
import '@firebase/storage';

const formStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topic: '',
            subject: '',
            image: '',
            url: "",
            progress: 0

        };
    }
    handleUpload = () => {
        const storage = firebase.storage();

        const { image } = this.state;
        const uploadTask = storage.ref(`images/${this.state.topic}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                // progress function ...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progress });
            },
            error => {
                // Error function ...
                console.log(error);
            },
            () => {
                // complete function ...
                storage
                    .ref("images")
                    .child(this.state.topic)
                    .getDownloadURL()
                    .then(
                        window.location.reload()
                    );
    }
        );
};
addPost = e => {
    e.preventDefault();
    const db = firebase.firestore();
    console.log(this.state.topic)
    this.handleUpload()
    const userRef = db.collection('posts').doc(this.state.topic).set({
        topic: this.state.topic,
        subject: this.state.subject
    }).then(() => this.handleUpload())
    this.setState({
        topic: '',
        subject: '',
        image: ''
    });
    console.log(this.state.image)
};

updateInput = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
}

onImageChange = (event) => {
    if (event.target.files[0]) {
        const image = event.target.files[0];
        this.setState(() => ({ image }));
    }
}

render() {
    const { topic, subject } = this.state
    return (
        <div style={formStyle}>
            <h1>Add post</h1>
            <form onSubmit={this.addPost} >
                <label>
                    <textarea style={{ width: "100%" }} cols="100" rows="1" placeholder="Topic" name="topic" value={topic} ref={el => this.element = el} onChange={this.updateInput} />
                </label>
                <br></br>
                <label>
                    <textarea style={{ width: "100%" }} cols="100" rows="10" type="text" placeholder="Subject" name="subject" value={subject} ref={el => this.element = el} onChange={this.updateInput} />
                </label>
                <br></br>
                <input type="file" onChange={this.onImageChange} className="filetype" id="group_image" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
}
export default Form;
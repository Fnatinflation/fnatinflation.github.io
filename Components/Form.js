import React from 'react';
import firestore from "./Firestore";
import firebase from 'firebase';
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topic: '',
            subject: ''
        };
    }

    addPost = e => {
        e.preventDefault();
        const db = firebase.firestore();
        const userRef = db.collection('posts').add({
            topic: this.state.topic,
            subject: this.state.subject
        });
        this.setState({
            topic: '',
            subject: ''
        });
    };

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {
        const { topic, subject } = this.state
        return (
            <form onSubmit={this.addPost}>
                <label>
                    Topic:
                 <input type="text" name="topic" value={topic} ref={el => this.element = el} onChange={this.updateInput} />
                </label>
                <label>
                    Subject:
                 <input type="text" name="subject" value={subject} ref={el => this.element = el} onChange={this.updateInput} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Form;
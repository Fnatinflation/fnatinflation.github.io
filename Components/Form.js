import React from 'react';
import firestore from "./Firestore";
import firebase from 'firebase';

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
            subject: ''
        };
    }

    addPost = e => {
        e.preventDefault();
        const db = firebase.firestore();
        const userRef = db.collection('posts').add({
            topic: this.state.topic,
            subject: this.state.subject
        }).then(()=>window.location.reload())
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
            <div style={formStyle}>
                <p>Add post</p>
                <form onSubmit={this.addPost} >
                    <label>
                 <input type="text" placeholder="Topic" name="topic" value={topic} ref={el => this.element = el} onChange={this.updateInput} />
                    </label>
                    <br></br>
                    <label>
                 <input type="text" placeholder="Subhect" name="subject" value={subject} ref={el => this.element = el} onChange={this.updateInput} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default Form;
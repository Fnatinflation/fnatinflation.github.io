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
        console.log(this.state.topic)
        const userRef = db.collection('posts').doc(this.state.topic).set({
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
                <h1>Add post</h1>
                <form onSubmit={this.addPost} >
                    <label>
                 <textarea cols="100" rows="1" placeholder="Topic" name="topic" value={topic} ref={el => this.element = el} onChange={this.updateInput} />
                    </label>
                    <br></br>
                    <label>
                 <textarea cols="100" rows="10" type="text" placeholder="Subject" name="subject" value={subject} ref={el => this.element = el} onChange={this.updateInput} />
                    </label>
                    <br></br>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default Form;
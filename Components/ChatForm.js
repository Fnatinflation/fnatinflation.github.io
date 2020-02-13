import firestore from "./Firestore";
import firebase from 'firebase';

class ChatForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "",
        }
    }

    addPost = e => {
        e.preventDefault();
        const db = firebase.firestore();
        var time = Math.floor(Date.now() / 1000)+'';
        const userRef = db.collection('chatmessages').doc(time).set({
            message: this.state.message,
            timestamp: time
        }).then(() => window.location.reload())
        this.setState({
            message: '',
        });
    };

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <div>
                <form style={{display:"inline-flex",width:"100%"}} onSubmit={this.addPost}>
                    <textarea style={{width:"80%"}}rows="1" type="text" placeholder="message" name="message" value={this.state.message} ref={el => this.element = el} onChange={this.updateInput} />
                    <input style={{width:"20%"}} type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default ChatForm
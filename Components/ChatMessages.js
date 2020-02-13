import firestore from "./Firestore";
import firebase from 'firebase';
class ChatMessages extends React.Component {
    state = { messages: [] };

    componentDidMount() {
        firebase
            .firestore()
            .collection("chatmessages")
            .limit(10)
            .get()
            .then(querySnapshot => {
                const messages = [];

                querySnapshot.forEach(function (doc) {
                    messages.push({
                        message: doc.data().message,
                    });
                });

                this.setState({ messages });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }
    render() {
        let receivedMessages = []
        this.state.messages.map((v, i) => {
            receivedMessages.push(
                <li>
                    {v.message}
                </li>
            )
        })
        return (
            <div>
                <ol>
                    {receivedMessages}
                </ol>
            </div>
        )
    }
}
export default ChatMessages
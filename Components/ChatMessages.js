import firestore from "./Firestore";
import firebase from 'firebase';

const AppString = {
    ID: 'id',
    PHOTO_URL: 'photoUrl',
    NICKNAME: 'nickname',
    ABOUT_ME: 'aboutMe',
    NODE_MESSAGES: 'messages',
    NODE_USERS: 'users',
    UPLOAD_CHANGED: 'state_changed',
    DOC_ADDED: 'added',
    PREFIX_IMAGE: 'image/'
}

const messagesShown = 10;

class ChatMessages extends React.Component {
    state = { messages: [], isLoading: false };

    constructor(props) {
        super(props)
        this.removeListener = null
        this.refreshed = false
    }

    componentWillUnmount() {
        if (this.removeListener) {
            this.removeListener()
        }
    }

    subscribe = () => {
        if (this.removeListener) {
            this.removeListener()
        }
        this.setState({ isLoading: true })
        const messages = [];

        this.removeListener = firebase
            .firestore()
            .collection("chatmessages")
            .orderBy("timestamp","desc")
            .limit(messagesShown)
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === AppString.DOC_ADDED) {
                        messages.push({
                            message: change.doc.data().message,
                        });
                    }
                })
                if(this.refreshed===false){
                    this.refreshed===true
                    this.componentDidMount()
                }
                this.setState({ messages, isLoading: false });
            },
                err => {
                    console.log('Error loading documents')
                }
            )
    }
    componentDidMount() {
        this.subscribe()
    }
    render() {
        let receivedMessages = []
       
        this.state.messages.map((v, i) => {
            receivedMessages.push(
                <div style={{ paddingBottom: "10px" }}>
                    <li style={{ padding: "10px", border: '1px solid #DDD' }}>
                        {v.message}
                    </li>
                </div>
            )
        })
        return (
            <div style={{ maxHeight: "500px", overflow: "auto" }}>
                <ol style={{ listStyle: "none", border: '1px solid #DDD', textAlign: "left", padding: "0" }}>
                    {receivedMessages}
                </ol>
            </div>
        )
    }
}
export default ChatMessages
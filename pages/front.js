
import Layout from '../Components/Layout';
import Button from 'react-bootstrap/Button';

class Front extends React.Component {
    render(){
        return (
            <Layout>
                <body style={frontStyle}>

               
                <h1>Kæmpe legende</h1>
                </body>
            </Layout>
           
        );
    }
}
const frontStyle = {
    margin: 20,
    padding: 20,
    backgroundColor:"#F2F2F2",
    textAlign: "center"
}
export default Front;
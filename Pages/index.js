import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import Button from 'react-bootstrap/Button';

class Index extends React.Component {
    render() {
        return (
            <div>

                <div class="hero-image" >
                    <img style={heroImage} src="https://blog.tmcnet.com/blog/rich-tehrani/wp-content/uploads/2019/12/Technology-AdobeStock_294390642-scaled.jpg"></img>
                    <div class="hero-text" style={heroText}>
                        <h1>Velkommen</h1>
                        <p>Mød en legende</p>  
                        <Button variant="dark" href="/front">Enter</Button>
            
                    </div>
                </div>
            </div>

        )
    }
}
export default Index
const heroImage = {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    zIndex: "1"
}

const heroText = {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "30px",
    zIndex: "2"

}

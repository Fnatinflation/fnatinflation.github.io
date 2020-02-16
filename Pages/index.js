class Index extends React.Component {

    render() {
        return (
            <div>
                <div className="hero-image" >
                    <img style={heroImage} src="https://st3.depositphotos.com/1670531/18062/i/1600/depositphotos_180623552-stock-photo-hero-header-background-copy-space.jpg"></img>
                    <div className="hero-text" style={heroText}>
                        <h1>Velkommen</h1>
                        <p>Mød en legende</p>
                        <a href="/front">
                            <button>Enter</button>
                        </a>
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
    color: "black",
    fontSize: "30px",
    zIndex: "2"

}

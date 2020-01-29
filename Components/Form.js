class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({name: this.element.value})
    }
    render() {
        const { name, data } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                 <input type="text" ref={el => this.element = el} />
                </label>
                <input type="submit" value="Submit" />
                <p>You entered {name}</p>      
            </form>      
        );
    }
}
export default Form;
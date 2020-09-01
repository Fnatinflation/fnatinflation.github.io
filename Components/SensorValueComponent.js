import React from 'react';
import Axios from 'axios';
class SensorValueComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: 'break' };
    }
    async componentDidMount() {
        var counter = 0;
        try {
            this.interval = setInterval(async () => {
                if (counter % 2) {
                    Axios.get("http://devices.webofthings.io/pi/sensors/temperature/")
                        .then(response => response.data)
                        .then(data => {
                            console.log("Data from db", data); //PRINT ON
                            this.setState({ temperature: data.value })
                        });
                    counter++;
                } else {
                    this.setState({ temperature: 'break' })
                    counter++;
                }
            }, 3000);
        } catch (e) {
            console.log(e);
        }


    }
    render() {
        return (
            <div>
                <p>{this.state.temperature}</p>
            </div>
        );
    }
} export default SensorValueComponent;
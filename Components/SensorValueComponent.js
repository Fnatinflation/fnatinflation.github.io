import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
class SensorValueComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperatures: [{ temperature: 0, timestamp: '' }],

        };
    }
    async componentDidMount() {
        var counter = 0;
        var length
        try {
            this.interval = setInterval(async () => {
                if (counter % 2) {
                    let { temperatures } = this.state;
                    console.log(this.state.temperatures)
                    Axios.get("http://devices.webofthings.io/pi/sensors/temperature/")
                        .then(response => response.data)
                        .then(data => {
                            var timestampTrimmed = data.timestamp.substr(11,8)
                            temperatures.push({ temperature: data.value, timestamp: timestampTrimmed })
                            this.setState({ temperatures: temperatures })
                        });

                    counter++;
                } else {
                    console.log('even')
                    counter++;
                }
            }, 2000);
        } catch (e) {
            console.log(e);
        }


    }
    render() {
        return (
            <div>
                <LineChart width={600} height={300} data={this.state.temperatures.slice()}>
                    <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="timestamp" />
                    <YAxis />
                </LineChart>
            </div>
        );
    }
} export default SensorValueComponent;
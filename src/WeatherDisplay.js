import React from "react";
import './WeatherDisplay.css'

export const PLACES = [
    { name: "Palo Alto", zip: "94303" },
    { name: "San Jose", zip: "94088" },
    { name: "Santa Cruz", zip: "95062" },
    { name: "Honolulu", zip: "96803" }
];

export class WeatherDisplay extends React.Component {
    render() {
        return <h1>Displaying weather for city {this.props.zip}</h1>;
    }
}

import React from "react";
import "./App.css";
import {WeatherDisplay} from "./WeatherDisplay";
import {PLACES} from "./WeatherDisplay";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePlace: 0
        };
    }
    render() {
        const activePlace = this.state.activePlace;
        return (
            <div className="App">
                {PLACES.map((place, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            this.setState({ activePlace: index });
                        }}
                    >
                        {place.name}
                    </button>
                ))}
                <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
            </div>
        );
    }
}

export default App;
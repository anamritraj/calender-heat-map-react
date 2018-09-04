import React, { Component } from 'react';
import './App.css';
import CalendarHeatMap from './CalenderHeatMap/CalendarHeatMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CalendarHeatMap></CalendarHeatMap>
      </div>
    );
  }
}

export default App;

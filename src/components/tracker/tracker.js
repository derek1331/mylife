import React from "react";
import "./tracker.css";
  
class Tracker extends React.Component {
    state = {
        number: 0
    }

    // Add 1
    // Can I convert this?
    addNumber = () => {
      let { number } = this.state;
      number++;
      this.setState({
        number
      })
    }

    // Subtract 1
    subtractNumber = () => {
      let { number } = this.state
      number--
      this.setState({
        number
      })
    }


    render() {
        return (
        <div>
          <span className="trackerTitle">{this.props.title}</span>
          <span className="tracker">{this.state.number}</span>
          <button className="trackerButton" onClick={this.addNumber}>Add</button>
          <button className="trackerButton" onClick={this.subtractNumber}>Remove</button>
        </div>
        )
    }
}

export default Tracker;
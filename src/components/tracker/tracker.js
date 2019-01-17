import React from "react";
  
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
          <h5>{this.props.title}</h5>
          <h3 className="numberForInput">{this.state.number}</h3>
          <button onClick={this.addNumber}>Add</button>
          <button onClick={this.subtractNumber}>Remove</button>
        </div>
        )
    }
}

export default Tracker;
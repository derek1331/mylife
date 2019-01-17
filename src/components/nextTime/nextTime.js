import React from "react";
import "./nextTime.css"
  
class NextTime extends React.Component {
    state = {
        newDate: 0
    }

    changeDate = () => {
      let {newDate} = this.state
      let changeDate = document.getElementById('date').value
      if (changeDate) {
      newDate = changeDate
      this.setState({
        newDate
      })
     }
    }

    render() {
        return (
        <div>
          <span className="nextTimeTitle">{this.props.title}</span>
          <span className="nextTime">{this.state.newDate}</span>
          <input id="date" type="date"></input>
          <button className="nextTimeButton" onClick={this.changeDate}>Change</button>
        </div>
        )
    }
}

export default NextTime;
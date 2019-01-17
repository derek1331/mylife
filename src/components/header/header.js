import React from "react";

// Mountain Time
Date.prototype.toIsoString = function() {
    var tzo = -this.getTimezoneOffset(),
      dif = tzo >= 0 ? "+" : "-",
      pad = function(num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? "0" : "") + norm;
      };
    return (

      (this.getMonth() + 1) +
      "-" +
      pad(this.getDate()) +
        "-" +
      pad(this.getFullYear()) 
    );
  };
  
  var todaysDate = new Date();
  
class Header extends React.Component {
    state = {
        date: todaysDate.toIsoString()
    }
    render() {
        console.log(this.state.date)
        return (
            <h5>Hello Derek, it's {this.state.date}!</h5>
        )
    }
}

export default Header;
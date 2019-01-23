import React from "react";
import "./goals.css";
  
class Goals extends React.Component {
    state = {
        completedGoals: 0,
        goal: ""
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({
            [name]: value
        })
    }

    // Can't do arrow function here cause it creates it's own this context
    // Non-arrow function - this is passed through?
    // Delete Button 
    deleteButtonFunction() {
        let parentGoal = this.parentNode
        parentGoal.remove()
    }

    // Complete Button 
    completeButtonFunction = (e) => {
        let { completedGoals } = this.state
        let strikeThrough = e.path[1]
        let uncompleteButton = document.getElementById("uncompleteButton")
        let completeButton = document.getElementById("completeButton")
        completeButton.hidden = true
        uncompleteButton.hidden = false
        strikeThrough.style.textDecoration = "line-through"
        completedGoals++
        this.setState({
            completedGoals
        })

    }

    // Uncomplete Button
    uncompleteButtonFunction = (e) => {
        let { completedGoals } = this.state
        let strikeThrough = e.path[1]
        let uncompleteButton = document.getElementById("uncompleteButton")
        let completeButton = document.getElementById("completeButton")
        completeButton.hidden = false
        uncompleteButton.hidden = true
        strikeThrough.style.textDecoration = "none"
        completedGoals--
        this.setState({
            completedGoals
        })
    }

    // Add Goal
    addGoal = () => {
        // Input Value
        let newGoal = document.getElementById('goalsText').value
        // Create Elements
        let goalsList = document.getElementById("goalsList")
        let goalsText = document.createElement("li")
        let deleteButton = document.createElement("button")    
        let completeButton = document.createElement("button")
        let uncompleteButton = document.createElement("button")
        // Goal Text 
        goalsText.textContent = newGoal
        // Button Text Content
        deleteButton.textContent = "Delete"
        completeButton.textContent = "Complete"
        uncompleteButton.textContent = "Uncomplete"
            // Hide uncomplete button 
        uncompleteButton.hidden = true
            // Add ids
        uncompleteButton.id = "uncompleteButton"
        completeButton.id = "completeButton"
        // Button Onclick
        uncompleteButton.onclick = this.uncompleteButtonFunction
        deleteButton.onclick = this.deleteButtonFunction  
        completeButton.onclick = this.completeButtonFunction
        // Append
        goalsText.appendChild(deleteButton)
        goalsText.appendChild(completeButton)
        goalsText.appendChild(uncompleteButton)
        goalsList.appendChild(goalsText)
        console.log(goalsText);
        
     }

    render() {
        return (
        <div>
          <span className="goals">Goals:</span>
          <span className="goalsTitle"></span>

          <textarea name="goal" className="goalsText" id="goalsText" value={this.state.goal} onChange={this.handleInputChange}></textarea>
          <button className="goalsButton" onClick={this.addGoal} >Add</button>

          <ol className="goalsList" id="goalsList">

          </ol>
          <span>Goals Completed: {this.state.completedGoals}</span>
        </div>
        )
    }
}

export default Goals;
import React from "react";
import "./notes.css";
import Modal from "../modal"
  
class Notes extends React.Component {
    state = {
        noteText: "",
        noteTitle: ""
    }

    unhide = (element) => {
        console.log(element)
        // element.style.display = "initial"
    }



    // Have to use arrow function here
    // Implicit return is nulled if there's brackets so nope
    // This! 
    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({
            [name]: value
        })
    }

    addNote = () => {
        // Saves the current values to there equivelent values
        let { noteText, noteTitle } = this.state
        // Checks to make sure there is a title to the note
        if (noteTitle === "") {
            return
        } else {
            let list = document.getElementById('notesList')
            let listItem = document.createElement('li')
            let modal = document.getElementById('modalMain')
            let modalTitle = document.getElementById('modalTitle')
            let modalText = document.getElementById('modalText')
            let modalEdit = document.getElementById('modalEdit')
            listItem.textContent = noteTitle
            modalText.textContent = noteText
            modalEdit.value = noteText
            listItem.onclick = () => {   
                modalTitle.textContent = noteTitle
                modal.style.display = 'initial'
            }
            list.appendChild(listItem)
        }

        console.log(noteTitle)
    }


    render() {
        
        return (
        <div className="notesMain" id="notesMain">
            <Modal></Modal>
          <span className="notes">Add Note:</span>
          <span className="notesTitle"></span>
          <form>
            <label>Title: </label>
                <input value={this.state.noteTitle} onChange={this.handleInputChange} name="noteTitle" type="text"></input>
            <label>Note: </label>
                <textarea className="notesText" id="notesText" name="noteText" value={this.state.noteText} onChange={this.handleInputChange}></textarea>
          </form>
          <button className="notesButton" onClick={this.addNote} >Add</button>
          <ol className="notesList" id="notesList">

          </ol>
        </div>
        )
    }
}

export default Notes;
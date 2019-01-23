import React from "react";
import "./modal.css";
  
class Modal extends React.Component {

    closeModal = () => {
        let modal = document.getElementById('modalMain');
        const modalText = document.getElementById('modalText')
        const modalEdit = document.getElementById('modalEdit')
        const modalSave = document.getElementById('modalSave')
        modal.style.display = 'none'
        modalEdit.style.display = 'none'
        modalSave.style.display = 'none'
        modalText.style.display = 'initial'
    }

    editNote = () => {
        const modalText = document.getElementById('modalText')
        const modalEdit = document.getElementById('modalEdit')
        const modalSave = document.getElementById('modalSave')
        modalText.style.display = 'none'
        modalEdit.style.display = 'initial'
        modalSave.style.display = 'initial'
    }

    saveNote = () => {
        let modalText = document.getElementById('modalText')
        let modalEdit = document.getElementById('modalEdit')
        let modalEditValue = modalEdit.value
        modalText.textContent = modalEditValue
        modalEdit.style.display = 'none'
        modalText.style.display = 'initial'
    }

    render() {
        return (
        <div className="modalMain" id="modalMain">
        <div className='modalContent'>
          <span className="modalTitle" id="modalTitle" ></span>
          <br></br>
          <span className='modalText' id="modalText" ></span>
          <textarea id="modalEdit" hidden ></textarea>
          <br></br>
          <button className="modalButton" onClick={this.editNote}>Edit</button>
          <button hidden className="modalButton" id="modalSave" onClick={this.saveNote}>Save</button>
          <button className="modalButton" onClick={this.closeModal}>Close</button>
        </div>
        </div>
        )
    }
}

export default Modal;
import React from "react";
import "./list.css"
  
class List extends React.Component {
    state = {
        listNewItem: ""
    }

    uncompleteItem (e) {
        const parentElement = e.srcElement.parentNode
        const span = e.path[1].children[0]
        const input = e.path[1].children[1]
        const buttonSave = e.path[1].children[3]
        const buttonEdit = e.path[1].children[2]
        const buttonComplete = e.path[1].children[4]
        const buttonUncomplete = e.path[1].children[5]
        // listItemEditButton.style.display = 'none'
        console.log(input.value);
        span.style.textDecoration = "none"
        buttonComplete.style.display = 'initial'
        buttonUncomplete.style.display = 'none'
        buttonEdit.style.display = 'initial'
        buttonSave.style.display = 'none'
        span.style.display = 'initial'
        input.style.display = 'none'

    }

    // need to change document.getElementById
    editItem (e) {

        // const parentNode = e.srcElement.parentNode
        const span = e.path[1].children[0]
        const listItemEditInput = e.path[1].children[1]
        const listItemSaveButton = e.path[1].children[3]
        const listItemEditButton = e.path[1].children[2]
        listItemEditButton.style.display = 'none'
        listItemSaveButton.style.display = 'initial'
        span.style.display = 'none'
        listItemEditInput.style.display = 'initial'
        console.log(e)

    }

    saveItem (e) {
        const span = e.path[1].children[0]
        const listItemEditInput = e.path[1].children[1]
        const listItemSaveButton = e.path[1].children[3]
        const listItemEditButton = e.path[1].children[2]
        // listItemEditButton.style.display = 'none'
        console.log(listItemEditInput.value);
        
        span.textContent = listItemEditInput.value
        listItemEditButton.style.display = 'initial'
        listItemSaveButton.style.display = 'none'
        span.style.display = 'initial'
        listItemEditInput.style.display = 'none'
        
    }

    completedItem = (e) => {
        const parentElement = e.srcElement.parentNode
        const span = e.path[1].children[0]
        const input = e.path[1].children[1]
        const buttonSave = e.path[1].children[3]
        const buttonEdit = e.path[1].children[2]
        const buttonComplete = e.path[1].children[4]
        const buttonUncomplete = e.path[1].children[5]
        // listItemEditButton.style.display = 'none'
        console.log(input.value);
        span.style.textDecoration = "line-through"
        buttonComplete.style.display = 'none'
        buttonUncomplete.style.display = 'initial'
        buttonEdit.style.display = 'none'
        buttonSave.style.display = 'none'
        span.style.display = 'initial'
        input.style.display = 'none'
    }

    removeItem = (e) => {
        const parentElement = e.srcElement.parentNode
        parentElement.remove()
    }

    addNewItem = () => {
        const { listNewItem } = this.state
        if ( listNewItem === "") {
            return
        } else {
        const list = document.getElementById('list')
        const listItem = document.createElement('li')
        const listItemSpan = document.createElement('span')
        const listItemEditButton = document.createElement('button')
        const listItemCompletedButton = document.createElement('button')
        const listItemRemoveButton = document.createElement('button')
        const listItemSaveButton = document.createElement('button')
        const listItemEditInput = document.createElement('input')

        const buttonUncomplete = document.createElement('button')
        buttonUncomplete.textContent = "Uncomplete"
        buttonUncomplete.onclick = this.uncompleteItem
        buttonUncomplete.style.display = 'none'    

        listItemSaveButton.style.display = 'none'
        listItemSaveButton.id = 'listItemSaveButton'
        listItemSaveButton.onclick = this.saveItem
        listItemEditInput.type = 'text'
        listItemEditInput.style.display = 'none'
        listItemEditInput.id = 'listItemEditInput'
        listItemEditInput.value = listNewItem
        // Add Text to buttons
        listItemEditButton.textContent = 'Edit'
        listItemCompletedButton.textContent = 'Complete'
        listItemRemoveButton.textContent = 'Remove'
        listItemSaveButton.textContent = 'Save'
        // Add onclick functions
        listItemEditButton.onclick = this.editItem
        listItemCompletedButton.onclick = this.completedItem
        listItemRemoveButton.onclick = this.removeItem
        //
        listItemSpan.textContent = listNewItem
        listItem.appendChild( listItemSpan )
        listItem.appendChild( listItemEditInput )
        listItem.appendChild( listItemEditButton )
        listItem.appendChild( listItemSaveButton )
        listItem.appendChild( listItemCompletedButton )
        listItem.appendChild( buttonUncomplete )
        listItem.appendChild( listItemRemoveButton )
        list.appendChild( listItem )
        }
        this.setState({
            listNewItem: ""
        }) 
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
        <div>
          <span className="listTitle temp">{this.props.title}</span>
          <br></br>
          <input id="listNewItem" type="text" name="listNewItem" value={this.state.listNewItem}  onChange={this.handleInputChange}></input>
          <button className="addNewItemButton"  onClick={this.addNewItem}>Add</button>
          <ol id="list">

          </ol>
        </div>
        )
    }
}

export default List;
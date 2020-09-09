import React from 'react';
import NewMerchForm from './NewMerchForm';
import MerchList from "./MerchList";
import EditMerchForm from './EditMerchForm';

class MerchController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addFormVisibleOnPage: false,
      editFormVisibleOnPage: false,
      merchToEdit : {},
      masterMerchList: []
    };
  }

  handleClickAddForm = () => {
    this.setState(prevState => ({
      addFormVisibleOnPage: !prevState.addFormVisibleOnPage,
      editFormVisibleOnPage : false
    }));
  }

  handleClickEditForm = () => {
    this.setState(prevState => ({
      editFormVisibleOnPage: !prevState.editFormVisibleOnPage,
      addFormVisibleOnPage: false
    }));
  }

  handleAddingNewMerchToList = (newMerch) => {
    const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
    this.setState({
      masterMerchList: newMasterMerchList,
      addFormVisibleOnPage: false
    });
  }

  handleEditMerch = (merch) => {
    // let newMasterMerchList = this.state.masterMerchList;
    
    // const merchIndex = this.state.masterMerchList.find(e => e.id === merch.id);
    // newMasterMerchList[merchIndex] = merch;

    const newMasterMerchList = this.state.masterMerchList.map(function(element) {
      if(element.id != merch.id) {
        return element;
      } else {
        return merch;
      }
    });

    this.setState({
      masterMerchList: newMasterMerchList,
      editFormVisibleOnPage: false
    });
  }

  findMerchById = (key) => {
    const merchIndex = this.state.masterMerchList.findIndex(e => e.key === key);
    console.log("Merch Index: " + merchIndex);
    this.setState({ merchToEdit : this.state.masterMerchList[merchIndex] });
    this.handleClickEditForm();
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.addFormVisibleOnPage) {
      currentlyVisibleState = <NewMerchForm onNewMerchCreation = {this.handleAddingNewMerchToList} />;
      buttonText= "Return to Merch List";
    } else if (!this.state.addFormVisibleOnPage && !this.state.editFormVisibleOnPage) {
      currentlyVisibleState = <MerchList merchList= {this.state.masterMerchList}  editFunc = {this.findMerchById}/>
      buttonText = "Add Merch";
    } else if (this.state.editFormVisibleOnPage) {
      currentlyVisibleState = <EditMerchForm merch ={this.state.merchToEdit} onEditMerchSubmission = {this.handleEditMerch} />;
      buttonText= "Return to Merch List";
    }

    // If both are false - merch list
    // if addForm true - show addForm
    // if editForm true - show Edit Form

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClickAddForm}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default MerchController;

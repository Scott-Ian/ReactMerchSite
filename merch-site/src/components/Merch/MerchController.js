import React from 'react';
import NewMerchForm from './NewMerchForm';
import MerchList from "./MerchList";
import EditMerchForm from './EditMerchForm';

class MerchController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMerchList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewMerchToList = (newMerch) => {
    const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
    this.setState({
      masterMerchList: newMasterMerchList,
      formVisibleOnPage: false
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
      formVisibleOnPage: false
    });
  }

  findMerchById = (id) => {
    const merchIndex = this.state.masterMerchList.find(e => e.id === id);
    return this.state.masterMerchList[merchIndex];
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewMerchForm onNewMerchCreation = {this.handleAddingNewMerchToList} />;
      buttonText= "Return to Merch List";
    } else {
      currentlyVisibleState = <MerchList merchList = {this.state.masterMerchList} />
      buttonText = "Add Merch";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default MerchController;

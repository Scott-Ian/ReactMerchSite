import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewMerchForm(props) {

  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      imageURL: event.target.imageURL.value,
      cost: event.target.cost.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }

  return(
    <React.Fragment>
      <form onSubmit = {handleNewMerchFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Product Name' 
          required />
        <textarea
          name='description'
          placeholder='Product Description' 
          required />
        <input
          type='text'
          name='imageURL'
          placeholder='Image URL' />
        <input
          type='number'
          name='cost'
          placeholder='Cost of Product' 
          required />
        <input
          type='number'
          name='quantity'
          placeholder='Number in Stock' 
          required />
        <button type="submit">Add Merch!</button>
      </form>
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;


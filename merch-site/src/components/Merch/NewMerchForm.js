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
          placeholder='Product Name' />
        <textarea
          name='description'
          placeholder='Product Description' />
        <input
          type='text'
          name='imageURL'
          placeholder='Image URL' />
        <input
          type='number'
          name='cost'
          placeholder='Cost of Product' />
        <input
          type='number'
          name='quantity'
          placeholder='Number in Stock' />
      </form>
    </React.Fragment>
  );
}

newMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;


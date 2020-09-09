import React from 'react';
import PropTypes from 'prop-types';

function EditMerchForm(props) {

  function handleEditMerchFormSubmission(event) {
    event.preventDefault();
    props.onEditMerchSubmission({
      name: event.target.name.value,
      description: event.target.description.value,
      imageURL: event.target.imageURL.value,
      cost: event.target.cost.value,
      quantity: event.target.quantity.value
    });
  }

  return(
    <React.Fragment>
      <form onSubmit = {handleEditMerchFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder={props.name} 
          required />
        <textarea
          name='description'
          placeholder={props.description} 
          required />
        <input
          type='text'
          name='imageURL'
          placeholder={props.description} />
        <input
          type='number'
          name='cost'
          placeholder={props.cost} 
          required />
        <input
          type='number'
          name='quantity'
          placeholder={props.quantity} 
          required />
        <button type="submit">Add Merch!</button>
      </form>
    </React.Fragment>
  );
}

EditMerchForm.propTypes = {
  onEditMerchCreation: PropTypes.func,

  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  cost: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default EditMerchForm;


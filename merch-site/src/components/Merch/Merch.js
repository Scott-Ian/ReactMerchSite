import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
  return (
    <React.Fragment>
      <div class="grid-item">
        <h3>{props.name}</h3>
        <img src={props.imageURL} />
        <h4>{props.description}</h4>
        <h3>{props.cost} - {props.quantity}</h3>
        <button onClick={props.buyFunc}>Buy Now!</button>
        <button onClick={props.editFunc}>Edit Item</button>
        <button onClick={props.deleteFunc}>Delete Item</button>
      </div>
    </React.Fragment>
  );
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  cost: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Merch;



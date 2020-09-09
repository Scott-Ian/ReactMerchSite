import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";

function MerchList(props) {
  return (
    <React.Fragment>
      {props.merchList.map((merch) =>
        <Merch name = {merch.name}
          description = {merch.description}
          imgURL = {merch.imgURL}
          cost = {merch.cost}
          quantity = {merch.quantity}
          editFunc = {props.editFunc}
          key={merch.key} />
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array,
  editFunc : PropTypes.func
};

export default MerchList;
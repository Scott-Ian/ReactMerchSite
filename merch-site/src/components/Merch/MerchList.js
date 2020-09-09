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
          key={merch.id}/>
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array
};

export default MerchList;
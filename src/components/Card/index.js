import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = data => {
  return data.feed.map((image, index) => (
    <React.Fragment>
      <div className="card-wrapper" key={index}>
        <p className="card-header">{image.title}</p>
        <img src={image.url} alt="" className="card-img" />
      </div>
    </React.Fragment>
  ));
};

Card.propTypes = {
  data: PropTypes.object
};

export default Card;

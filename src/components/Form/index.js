import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

const Form = submitHandler => {
  return (
    <form className="form" onSubmit={submitHandler.handler}>
      <input id="url" name="url" placeholder="Enter URL" type="url" required />
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Enter Title"
        required
      />
      <button type="submit">New Post</button>
    </form>
  );
};

Form.propTypes = {
  submitHandler: PropTypes.func
};

export default Form;

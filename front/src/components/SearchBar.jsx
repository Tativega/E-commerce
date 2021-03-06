import React from "react";

export default ({ inputValue, handleChange, handleSubmit, handleKeyPress }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        size="30"
        className="form-control"
        type="search"
        placeholder="Buscar..."
        name="search"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      ></input>
    </form>
  );
};

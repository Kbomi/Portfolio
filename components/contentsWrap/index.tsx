import React from "react";
import PropTypes from "prop-types";

const ContentsWrap = ({ children, className = "" }) => {
  return (
    <>
      <div
        id="contentsWrap"
        className={`contents-wrap${className ? " " + className : ""}`}
      >
        {children}
      </div>
    </>
  );
};

export default ContentsWrap;

ContentsWrap.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

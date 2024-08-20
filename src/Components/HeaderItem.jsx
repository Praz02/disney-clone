import React from "react";
import PropTypes from "prop-types";

function HeaderItem({ name, Icon }) {
  return (
    <div className="flex items-center gap-3 font-semibold cursor-pointer text-[15px] hover:underline underline-offset-8 mb-3">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
}
HeaderItem.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired, // Validating the icon as a React component
};

export default HeaderItem;

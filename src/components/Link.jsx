import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Link = ({ active, children, onClick }) => (
    <button onClick={onClick} disabled={active} style={{ marginLeft: "10px" }}>
        {children}
    </button>
);

Link.propsTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;

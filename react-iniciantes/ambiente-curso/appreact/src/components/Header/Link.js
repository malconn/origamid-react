import React from "react";

const Link = ({ texto, ...props }) => {
  return <a {...props}>{texto}</a>;
};

export default Link;

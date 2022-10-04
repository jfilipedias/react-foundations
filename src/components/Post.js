import React from "react";
import PropTypes from "prop-types";

export default function Post({ title, subtitle }) {
  return (
    <>
      <article>
        <strong>{title}</strong>

        <br />

        <span>{subtitle}</span>
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

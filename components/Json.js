import React from 'react';
import PropTypes from 'prop-types';

const Json = ({ json, className }) =>
  json ? <pre className={className}>{JSON.stringify(json, null, 2)}</pre> : null;

Json.propTypes = {
  className: PropTypes.string,
  json: PropTypes.object,
};

export default Json;

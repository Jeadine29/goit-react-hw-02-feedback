// src/components/Notification.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles.module.css';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

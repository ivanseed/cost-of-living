import React from 'react';
import { withRouter } from 'react-router-dom';

import './button.css';

const Button = withRouter(({ text, isDisabled, history, link, className }) => (
  <button
    className={className}
    disabled={isDisabled}
    type="button"
    onClick={() => {
      history.push(link);
    }}
  >
    {text}
  </button>
));

export default Button;

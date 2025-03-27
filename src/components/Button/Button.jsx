import React from 'react';
import style from './Button.module.css';

const Button = ({ vote, children }) => {
  return (
    <button className={style.button} onClick={vote}>
      {children}
    </button>
  );
};

export default Button;

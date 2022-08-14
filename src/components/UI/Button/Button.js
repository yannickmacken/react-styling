import React from 'react';
// Below method of importing (as a module) renames the CSS classnames to unique names,
// to avoid overspilling styles to other elements. They are scoped only to this component.
import styles from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

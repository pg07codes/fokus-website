import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
      <li>
          <Link to="https://github.com/pg07codes/fokus/">How to Use</Link>
        </li>
        <li>
          <Link to="https://github.com/pg07codes/fokus/">Contact Us</Link>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/pg07codes/fokus/">Star on Github</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://fokusapp.netlify.app">Open App</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
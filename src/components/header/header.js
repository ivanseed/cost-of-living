import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <Link className="header-logo__text" to="/">
          movingplaces
        </Link>
      </div>
    </div>
  );
}

export default Header;

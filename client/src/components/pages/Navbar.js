import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div class='nav-wrapper'>
        <a href='#!' class='brand-logo'>
          Dashboard
        </a>
        <ul class='right'>
          <li>
            <a href='#!'>
              <i class='material-icons right hide-on-small-only'>
                arrow_forward
              </i>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

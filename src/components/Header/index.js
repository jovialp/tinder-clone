import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Forum as ForumIcon, Person as PersonIcon } from '@mui/icons-material';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
        alt="logo"
      />

      <ForumIcon fontSize="large" className="header__icon" />
    </div>
  );
};

export default Header;

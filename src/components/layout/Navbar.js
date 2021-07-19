import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
// Style
import { Wrapper, Content } from "./Navbar.styles";


const Navbar = ({ icon, title }) => {
  return (
    <Wrapper className='bg-red-600 navbar'>
      <Content>
        <i className={icon}></i>
        {title}
      </Content>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </Wrapper>
  );
};
Navbar.defaultProps = {
  title: ' Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;

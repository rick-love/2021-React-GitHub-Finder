import React from 'react';
import PropTypes from 'prop-types';
// Style
import { Wrapper, Content } from "./Navbar.styles";


const Navbar = ({ icon, title }) => {
  return (
    <Wrapper className='bg-red-600 navbar'>
      <Content>
        <i className={icon}></i>
        {title}
      </Content>
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

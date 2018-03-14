import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
  console.log('My auth status is', auth);
  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
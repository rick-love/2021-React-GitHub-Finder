import React from 'react';
import UserItem from './UserItem';
import { Wrapper } from './Users.styles';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  if(!users){
    return (
      <div>No Users</div>
    )
  }
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Wrapper>
        {/* Looping through the State Array */}
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </Wrapper>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;

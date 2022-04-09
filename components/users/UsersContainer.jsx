// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => {
    dispatch(followAC(userId));
  },
  unfollow: (userId) => {
    dispatch(unfollowAC(userId));
  },
  setUsers: (users) => {
    dispatch(setUsersAC(users));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);

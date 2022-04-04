// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';
import Mypost from './Mypost';

const mapStateToProps = (state) => ({
  postsData: state.profileReducer.posts,
  newPostText: state.profileReducer.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  onPostChange: (text) => {
    const action = updateNewPostTextActionCreator(text);
    dispatch(action);
  },
  addPost: () => {
    dispatch(addPostActionCreator());
  },
});

const MypostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mypost);

export default MypostContainer;

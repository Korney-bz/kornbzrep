// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogsReducer: state.dialogsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => {
    dispatch(sendMessageCreator());
  },
  updateNewMessageBody: (body) => {
    dispatch(updateNewMessageBodyCreator(body));
  },
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

function DialogsItem(props) {
  const path = `/dialogs*${props.id}`;
  return (
    <div className={`${s.dialogs} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

function Message(props) {
  return <div className={s.dialogs}>{props.message}</div>;
}

function Dialogs(props) {
  const state = props.dialogsReducer;
  // eslint-disable-next-line max-len
  const dialogsElements = state.dialogs.map((d) => <DialogsItem name={d.name} key={d.id} id={d.id} />);
  const messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} />);
  const { newMessageBody } = state;

  const onSendMessageClick = () => {
    props.sendMessage();
  };
  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="введи код а то убьет"
          />
        </div>
        <div>
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;

import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'suk nah bla bla bla', likesCount: 3333 },
        { id: 2, message: 'bla bla', likesCount: 33 },
        { id: 3, message: 'astrakhan rulez', likesCount: 23 },
        { id: 4, message: 'wtf', likesCount: 123 },
      ],
      newPostText: 'korn is power',
    },
    messagesPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Whatsup' },
        { id: 3, message: 'Женя Пепеня' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Baagin' },
      ],
      dialogs: [
        { id: 1, name: 'Misha' },
        { id: 2, name: 'Jenny' },
        { id: 3, name: 'Farid' },
        { id: 4, name: 'Olya' },
        { id: 5, name: 'Slava' },
      ],
      newMessageBody: '',
    },
  },
  // eslint-disable-next-line no-underscore-dangle

  getState() {
    // eslint-disable-next-line no-underscore-dangle
    return this._state;
  },
  dispatch(action) {
    // eslint-disable-next-line no-underscore-dangle
    this._state.profilePage = profileReducer({ state: this._state.profilePage, action });
    // eslint-disable-next-line no-underscore-dangle
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    // eslint-disable-next-line no-underscore-dangle
    this._state.sidebar = sidebarReducer(this._state.sidebar);
  },
};

export default store;

window.store = store;

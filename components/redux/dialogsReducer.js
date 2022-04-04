const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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
};

// eslint-disable-next-line default-param-last
const dialogsReducer = (state = initialState, action) => {
  const stateCopy = {
    ...state,
    messages: [...state.messages],
  };
  switch (action.type) {
    case 'UPDATE-NEW-MESSAGE-BODY':
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    case 'SEND-MESSAGE':
      // eslint-disable-next-line no-case-declarations
      const body = state.newMessageBody;
      stateCopy.newMessageBody = '';
      stateCopy.messages.push({ id: 6, message: body });
      return stateCopy;
    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body,
});
export default dialogsReducer;

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  posts: [
    { id: 1, message: 'suk nah bla bla bla', likesCount: 3333 },
    { id: 2, message: 'bla bla', likesCount: 33 },
    { id: 3, message: 'astrakhan rulez', likesCount: 23 },
    { id: 4, message: 'wtf', likesCount: 123 },
  ],
  newPostText: 'korn is power',
};

// eslint-disable-next-line default-param-last
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 123,
      };
      const stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.newPostText = action.newPost;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newPost: text,
});
export default profileReducer;

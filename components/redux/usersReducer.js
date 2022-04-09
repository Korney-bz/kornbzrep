const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
    {
      id: 1, photoUrl: 'https://avatars.mds.yandex.net/i?id=fb1586a0a36550c9301cb83c0052b5fb-5176143-images-thumbs&n=13', followed: true, fullName: 'Misha', status: 'big papa', location: { city: 'Saint Petersburg', country: 'Russia' },
    },
    {
      id: 2, photoUrl: 'https://img2.freepng.ru/20181201/aph/kisspng-portable-network-graphics-vector-graphics-customer-5c033c289a6bf4.9912322615437158806325.jpg', followed: true, fullName: 'Jenya', status: 'big mama', location: { city: 'Saint Petersburg', country: 'Russia' },
    },
    {
      id: 3, photoUrl: 'https://avatars.mds.yandex.net/i?id=fb1586a0a36550c9301cb83c0052b5fb-5176143-images-thumbs&n=13', followed: false, fullName: 'Farid', status: 'big ass', location: { city: 'Saint Petersburg', country: 'Russia' },
    },
  ],
};

// eslint-disable-next-line default-param-last
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS: {
      return { ...state, users: [...state.users, action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export default usersReducer;

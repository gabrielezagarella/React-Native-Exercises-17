import { Profile } from "../../models/Contact";
import {
  BOOKMARK_ACTIONS,
  BookmarkAction,
  BookmarkProps,
} from "../actions/bookmarkActions";

const initialState: BookmarkProps = {
  bookmarks: [],
};

const bookmarkReducer = (state = initialState, action: BookmarkAction) => {
  // console.log('action', action);
  // console.log('state', state);

  switch (action.type) {
    case BOOKMARK_ACTIONS.ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks.filter((item)=>item.id.value !== (action.payload as Profile).id.value),
          action.payload
        ]

        // bookmarks: [
        //   ...state.bookmarks.filter(
        //     (item) => item.id !== (action.payload as Profile).id
        //   ),
        //   action.payload,
        // ],
      };
    case BOOKMARK_ACTIONS.REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks.filter(
            (item) => item.id.value !== (action.payload as string)
          ),
        ],
      };
    case BOOKMARK_ACTIONS.REMOVE_ALL_BOOKMARK:
      return initialState;
    default:
      return state;
  }
};
export default bookmarkReducer;

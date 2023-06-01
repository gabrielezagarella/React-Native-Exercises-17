import { Profile } from '../../models/Contact';

export interface BookmarkProps {
  bookmarks: Profile[];
}

export interface BookmarkAction {
  type: BOOKMARK_ACTIONS;
  payload: Profile | string;
}

export enum BOOKMARK_ACTIONS {
  ADD_BOOKMARK = 'ADD_BOOKMARK',
  REMOVE_BOOKMARK = 'REMOVE_BOOKMARK',
  REMOVE_ALL_BOOKMARK = 'REMOVE_ALL_BOOKMARK',
}

export const addBookmark = (bookmark: Profile) => {
  return {
    type: BOOKMARK_ACTIONS.ADD_BOOKMARK,
    payload: bookmark,
  };
};

export const removeBookmark = (id: string) => {
  return {
    type: BOOKMARK_ACTIONS.REMOVE_BOOKMARK,
    payload: id,
  };
};

export const removeAllBookmark = () => {
  return {
    type: BOOKMARK_ACTIONS.REMOVE_ALL_BOOKMARK,
  };
};

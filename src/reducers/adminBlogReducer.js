import { LOAD_BLOG_LIST_SUCCESS } from "../actions/adminActions";
import { LOAD_BLOG_LIST_FAILURE } from "../actions/adminActions";

import { SAVE_BLOG_REQUEST } from "../actions/adminActions";
import { SAVE_BLOG_SUCCESS } from "../actions/adminActions";
import { SAVE_BLOG_FAILURE } from "../actions/adminActions";

import {insertOrUpdate} from "../helpers/arrayHelper";

const initialState = {
  savingBlog: false,
  savedBlog: false,
  errors: [],
  currentBlogId: -1,
  blogList: []
};

export function adminBlog(state = initialState, action) {
  switch (action.type) {
    case LOAD_BLOG_LIST_SUCCESS:
      const blogList = action.blogList;
      return {
        ...state,
        blogList
      };
    case LOAD_BLOG_LIST_FAILURE:
      return { ...state, errors: action.errors };
    case SAVE_BLOG_REQUEST:
      return { ...state, savingBlog: true, errors: [] };
    case SAVE_BLOG_SUCCESS:
      const { blog } = action;
      const currentBlogList = state.blogList;
      const updatedBlogList = insertOrUpdate(currentBlogList, blog, (a,b) => a.id===b.id)
      return {
        errors: [],
        savingBlog: false,
        savedBlog: true,
        blogList: updatedBlogList
      };
    case SAVE_BLOG_FAILURE:
      return { ...state, savingBlog: false, errors: action.errors };
    default:
      return state;
  }
}

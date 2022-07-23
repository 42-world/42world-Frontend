import { WritingInputState, WritingInputStateAction } from './types';

export const writingReducer = (state: WritingInputState, action: WritingInputStateAction) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'LOAD_ARTICLE':
      return {
        ...state,
        title: action.value.title,
        content: action.value.content,
      };
  }
};

import { WritingInputState, WritingInputStateAction, WritingInputStateEnum } from './types';

export const writingReducer = (state: WritingInputState, action: WritingInputStateAction) => {
  switch (action.type) {
    case WritingInputStateEnum.CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case WritingInputStateEnum.LOAD_ARTICLE:
      return {
        ...state,
        title: action.value.title,
        content: action.value.content,
      };
  }
};

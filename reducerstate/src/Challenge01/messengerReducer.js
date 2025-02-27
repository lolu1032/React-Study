export const initialState = {
    selectedId: 0,
    messages: {
        0: 'Hello, Taylor', 
        1: 'Hello, Alice',
        2: 'Hello Blob'
    }
  };
  
  export function messengerReducer(
    state,
    action
  ) {
    switch (action.type) {
      case 'changed_selection': {
        return {
          ...state,
          selectedId: action.contactId,
        };
      }
    case 'edited_message': {
    return {
        ...state,
        messages: {
            ...state.messages,
            [state.selectedId]: action.message
        }
      };
    }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  
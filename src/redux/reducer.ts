import { CHANGE_STATUS } from './actions';

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case CHANGE_STATUS:
      return {
        ...state,
        candidates: state.candidates.map(c =>
          c.id === action.id ? { ...c, status: action.status } : c,
        ),
      };
  }

  return state;
}

export default reducer;

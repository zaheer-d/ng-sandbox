import {UPDATE_ACTION, RESET_ACTION } from './actions';

export interface State  {
  id: number;
  someText: string;
  isOnOf: boolean;
}

export const INITIAL_STATE: State = {
  id: 0,
  someText: 'sample',
  isOnOf: false,
};

export const reducer = (store: State = INITIAL_STATE, action ) => {
  switch (action.type) {
    case RESET_ACTION:
      break;
    case UPDATE_ACTION:
      break;
  }

};


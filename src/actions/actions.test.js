import * as actions from './actions';
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../constants/constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
    const text = 'woo';
    const expectAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectAction);
});

it('handles requesting api call', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectAction = {
        type: REQUEST_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expectAction);

})
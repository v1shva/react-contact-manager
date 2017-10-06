
import { combineReducers } from 'redux';
import ContactReducer from './contact-reducer';
import UserReducer from './user-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
    userStore: UserReducer,
    contactStore: ContactReducer,
    form: formReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
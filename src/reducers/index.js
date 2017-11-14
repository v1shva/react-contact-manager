
import { combineReducers } from 'redux';
import ContactReducer from './contact-reducer';
import UserReducer from './user-reducer';
import ItemReducer from './item-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
    userStore: UserReducer,
    contactStore: ContactReducer,
    itemStore: ItemReducer,
    form: formReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
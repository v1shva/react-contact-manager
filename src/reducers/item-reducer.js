

const defaultState = {
    items: [],
    item: {name:{}},
    loading: false,
    errors: {}
}

export default (state=defaultState, action={}) => {
    switch (action.type) {
        case 'FETCH_ITEMS': {
            return {
                ...state,
                items: action.payload
            }
        }
        case "FETCH_ITEMS_FULFILLED": {
            return {
                ...state,
                items: action.payload.data.data || action.payload.data // in case pagination is disabled
            }
        }
        case 'NEW_ITEM': {
            return {
                ...state,
                item: {name:{}}
            }
        }

        case 'SAVE_ITEM_PENDING': {
            return {
                ...state,
                loading: true
            }
        }

        case 'SAVE_ITEM_FULFILLED': {
            return {
                ...state,
                items: [...state.items, action.payload.data],
                errors: {},
                loading: false
            }
        }

        case 'SAVE_ITEM_REJECTED': {
            const data = action.payload.response.data;
            // convert feathers error formatting to match client-side error formatting
            const { "name.first":first, "name.last":last, phone, email } = data.errors;
            const errors = { global: data.message, name: { first,last }, phone, email };
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }
        case 'FETCH_ITEM_PENDING': {
            return {
                ...state,
                loading: true,
                item: {name:{}}
            }
        }

        case 'FETCH_ITEM_FULFILLED': {
            return {
                ...state,
                item: action.payload.data,
                errors: {},
                loading: false
            }
        }

        case 'UPDATE_ITEM_PENDING': {
            return {
                ...state,
                loading: true
            }
        }

        case 'UPDATE_ITEM_FULFILLED': {
            const item_r = action.payload.data;
            return {
                ...state,
                items: state.items.map(item => item._id === item_r._id ? item_r : item),
                errors: {},
                loading: false
            }
        }

        case 'UPDATE_ITEM_REJECTED': {
            const data = action.payload.response.data;
            const { "name.first":first, "name.last":last, phone, email } = data.errors;
            const errors = { global: data.message, name: { first,last }, phone, email };
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }
        case 'DELETE_ITEM_FULFILLED': {
            const _id = action.payload.data._id;
            return {
                ...state,
                items: state.items.filter(item => item._id !== _id)
            }
        }

        default:
            return state;
    }
}
import * as actionTypes from '../actions/actionTypes'

export const clientssReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.CREATE_CLIENT_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.client)
            ];
        case actionTypes.FETCH_CLIENTS_SUCCESS:
            return action.clients;
        default:
            return state;
    }
};

// export const companyReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'FETCH_BOOK_BY_ID_SUCCESS':
//             return action.book;
//         default:
//             return state;
//     }
// };
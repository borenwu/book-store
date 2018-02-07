import * as actionTypes from '../actions/actionTypes'

export const companiesReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.CREATE_COMPANY_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.company)
            ];
        case actionTypes.FETCH_COMPANIES_SUCCESS:
            return action.companies;
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
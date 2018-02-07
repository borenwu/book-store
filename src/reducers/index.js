import {combineReducers} from 'redux'
import {booksReducer, bookReducer} from './bookReducers'
import {companiesReducer} from './companyReducers'

export default combineReducers({
    books: booksReducer,
    book: bookReducer,
    companies:companiesReducer,
});
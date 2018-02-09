import {combineReducers} from 'redux'
import {booksReducer, bookReducer} from './bookReducers'
import {companiesReducer} from './companyReducers'
import {clientsReducer,clientReducer} from "./clientReducers";

export default combineReducers({
    books: booksReducer,
    book: bookReducer,
    companies:companiesReducer,
    clients:clientsReducer,
    client:clientReducer
});
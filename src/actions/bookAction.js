import * as actionTypes from './actionTypes'
import Axios from 'axios'

const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book'

export const fetchBookSuccess = (books) =>{
    return{
        type: actionTypes.FETCH_BOOKS_SUCCESS,
        books
    }
}

export const fetchBooks = () =>{
    return (dispatch) => {
        return Axios.get(apiUrl)
            .then(response=>{
                dispatch(fetchBookSuccess(response.data))
            })
            .catch(err => {
                throw(err)
            })
    }
}
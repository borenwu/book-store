import {createStore} from 'redux'
import rooterReducer from '../reducers'

export default function configureStore(initialState) {
    return createStore(
        rooterReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        initialState
    )
}


import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rooterReducer from '../reducers'

export default function configureStore(initialState) {
    return createStore(
        rooterReducer,
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        initialState
    )
}


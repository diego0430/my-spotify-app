import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers/rootReducer'
import { getAlbums } from './actions/albumAction'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
)

store.dispatch(getAlbums())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
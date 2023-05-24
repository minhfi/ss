import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { routerMiddleware } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { reducers } from './reducers'
import { saga } from './saga'

const persistConfig = {
  key: 'store',
  storage
}

const initialStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const history = createBrowserHistory()

  const persistedReducer = persistReducer(persistConfig, reducers)

  const middleware = composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history)
    )
  )

  const store = createStore(
    persistedReducer,
    {},
    middleware
  )

  const persistor = persistStore(store)

  sagaMiddleware.run(saga)
  return { store, persistor }
}

export const configureStore = initialStore()

export type TAppState = ReturnType<typeof configureStore.store.getState>

export type TAppDispatch = typeof configureStore.store.dispatch

export type TSelectorResult<T> = (state: TAppState) => T

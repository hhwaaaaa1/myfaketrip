import React from 'react'
import withRedux from 'next-redux-wrapper'
import { AppProps } from 'next/app'
import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import withReduxSaga from 'next-redux-saga'
import reducer from '@src/reducers'
// import rootSaga from '@src/sagas'; // lint warning 때문에 잠시 주석처리

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
  </>
)

const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware]

  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(composeWithDevTools(applyMiddleware(...middlewares)))

  const store = createStore(reducer, initialState, enhancer)
  // sagaMiddleware.run(rootSaga); // lint warning 때문에 잠시 주석처리
  return store
}

export default withRedux(configureStore)(withReduxSaga(MyApp))

import withRedux from "next-redux-wrapper"
import { NextComponentType } from "next"
import { AppContext, AppInitialProps, AppProps } from "next/app"
import { createStore, compose, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import withReduxSaga from "next-redux-saga"
import reducer from "src/reducers"
import rootSaga from "src/sagas"

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware]

  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(composeWithDevTools(applyMiddleware(...middlewares)))

  const store = createStore(reducer, initialState, enhancer)
  sagaMiddleware.run(rootSaga)
  return store
}

export default withRedux(configureStore)(withReduxSaga(App))

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import store from '../redux/store'
import {Provider} from 'react-redux'

const initialState = {
  btnText: "Click Me!"
}

const configuredStore = store(initialState)

ReactDOM.render(
  <Provider store={configuredStore}>
    <App />
  </Provider>,
  document.getElementById('app')
)

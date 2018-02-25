import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import 'rxjs'

import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store/configureStore'

import App from './app'
import registerServiceWorker from './registerServiceWorker'

const Root = () => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</Provider>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'))

registerServiceWorker()

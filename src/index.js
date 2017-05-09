// @flow
import React, {Component, PropTypes} from 'react'
import {AsyncStorage, NetInfo} from 'react-native'
import {persistStore} from 'redux-persist';
import {Router, Scene, Modal} from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import configureStore from './store/configureStore'
import {routes} from './variables'

import {setIsConnected} from './actions'

// import scene components
import {
  Home,
  Navigation
} from './containers'

const RouterWithRedux = connect()(Router)
const store = configureStore()
const persistConfig = { storage: AsyncStorage, whitelist: [] }

export default class App extends Component {

  state = {rehydrated: false}

  componentWillMount () {
    persistStore(store, persistConfig, () => { this.setState({rehydrated: true}) })
  }

  componentDidMount () {
    NetInfo.isConnected.fetch().then().done(() => {
      NetInfo.isConnected.addEventListener('change', this._handleConnectivityChange)
    })
  }

  componentWillUnmount () {
    NetInfo.isConnected.removeEventListener('change', this._handleConnectivityChange)
  }

  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='modal' direction='vertical' component={Modal}>
            <Scene key='root' navBar={NavBar} duration={0}>
              <Scene key={routes.HOME} initial component={Home} title='Home Page' />
              <Scene key={routes.NAVIGATION} component={Navigation} title='Navigation Page' />

            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }

  _handleConnectivityChange = (isConnected) => store.dispatch(setIsConnected(isConnected))
}

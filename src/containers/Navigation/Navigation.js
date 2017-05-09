// @flow
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native'
import {Actions, ActionConst} from 'react-native-router-flux'
import {routes} from '../../variables'
import styles from './styles.js'

export default class Navigation extends Component {
  static propTypes = {}
  static defaultProps = {}
  _pages = [
    {
      name: 'Home',
      route: routes.HOME
    }
  ]

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this._pages.map((page, i) =>
            <View style={[styles.navItemWrapper, {borderTopWidth: i === 0 ? StyleSheet.hairlineWidth : 0}]} key={i}>
              <TouchableOpacity onPress={this._onPagePress.bind(this, page.route)} style={styles.navItem} >
                <Text style={styles.navItemText}>{page.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    )
  }

  _onPagePress = (route) => {
    const state = this.props.navigationState
    if (state.index > 0 && state.children[state.index - 1].name === route) {
      Actions.pop()
    } else {
      Actions[route]({type: ActionConst.REPLACE})
    }
  }
}


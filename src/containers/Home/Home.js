// @flow
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import {layoutStyles} from '../../variables'
import styles from './styles.js'

export default class Home extends Component {
  static propTypes = {}
  static defaultProps = {}
  render () {
    return (
      <View style={[styles.container, layoutStyles]}>
        <TouchableOpacity onPress={() => {console.log('on minus press')}} style={[styles.addTransaction, {left: 20}]}>
          <Text style={styles.addTransactionText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {console.log('on add press')}} style={[styles.addTransaction, {right: 20}]}>
          <Text style={styles.addTransactionText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


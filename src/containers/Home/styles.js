import {StyleSheet} from 'react-native'
import { colors } from '../../variables'

export default {
  container: {
    flex: 1
  },
  addTransaction: {
    position: 'absolute',
    bottom: 20,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.transparent,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: `${colors.white}aa`,
    borderRadius: 50
  },
  addTransactionText: {
    color: `${colors.white}aa`
  }
}

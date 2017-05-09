import {StyleSheet} from 'react-native'
import { colors, metrics } from '../../variables'

export default {
  container: {
    flex: 1,
    paddingTop: metrics.statusBarHeight + metrics.navBarHeight + 10,
  },
  navItemWrapper: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.black
  },
  navItem: {
    paddingHorizontal: metrics.sidePadding,
    paddingVertical: 10,
  },
  navItemText: { color: colors.white }
}

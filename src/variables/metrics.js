import {Platform} from 'react-native'

const metrics = {
  statusBarHeight: Platform.select({ios: 22, android: 0}),
  navBarHeight: 35,
  sidePadding: 20
}

export default metrics

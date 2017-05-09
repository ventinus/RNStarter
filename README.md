# RNStarter
React-Native project scaffold after running `react-native init ProjectName`

Install dependencies with:
`yarn add babel-plugin-transform-remove-console prop-types react-native-router-flux react-redux redux redux-logger redux-persist redux-thunk`
(assuming that you already have react and react-native installed automatically by the installer)

Copy this directory into your react-native project root and update the `index.ios.js` and `index.android.js` to look something like:
```js
import { AppRegistry } from 'react-native'
import App from './src'

AppRegistry.registerComponent('AppNameInstalledWith', () => App);
```

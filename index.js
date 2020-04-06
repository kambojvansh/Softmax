/**
 * @format
 */
// import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Softmax from './src/App'
import Home from './src/screens/HomeScreen'

AppRegistry.registerComponent(appName, () => Softmax);

import { registerRootComponent } from 'expo';

// import App from './App';
// import Login from './src/screen/Login';
import Signup from './src/screen/Signup';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Signup);

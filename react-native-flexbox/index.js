import { registerRootComponent } from 'expo';

// import App from './App';
// import Flex from './components/Flex';
// import FlexDirectionBasics from './components/FlexDirectionsBasics.js';
// import DirectionLayout from './components/DirectionLayout.js';
// import JustifyContentBasics from './components/JustifyContentBasics.js';
// // import AlignItemsLayout from './components/AlignItemsLayout.js';
// import AlignSelfLayout from './components/AlignSelfLayout.js';
import AlignContentLayout from './components/AlignContentLayout.js';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(AlignContentLayout);

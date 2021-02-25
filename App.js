import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home.js';
import  Info from './src/screens/Info.js';
import Random_info from './src/screens/Random_info.js';




  const appNavigator = createStackNavigator(
    {
      HomePage: Home,
      Information: Info,
      Random : Random_info ,
    },
    
  );

export default createAppContainer(appNavigator);

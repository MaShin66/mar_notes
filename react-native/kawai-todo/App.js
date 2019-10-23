import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from './Components/MainScreen';
import DriverSignUp from './Components/driver/DriverSignUp'
import UserEnroll from './Components/user/UserEnroll';
import DriverEnroll from './Components/driver/DriverEnroll';
import DriverEnroll2 from './Components/driver/DriverEnroll2';
import DriverEnroll3 from './Components/driver/DriverEnroll3';
import DriverMyCourse from './Components/driver/DriverMyCourse';

const App = createStackNavigator(
    {
        // Home: { screen: MainScreen },
        Home: { screen: DriverEnroll },

        DriverSignUp: { screen: DriverSignUp },
        UserEnroll: { screen: UserEnroll },
        DriverEnroll: { screen: DriverEnroll },
        DriverEnroll2: { screen: DriverEnroll2 },
        DriverEnroll3: { screen: DriverEnroll3 },
        DriverMyCourse: { screen: DriverMyCourse }
    },
    // initialRouteName: 시작페이지 지정, 
    // headerMode: float - Render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.
    // screen - Each screen has a header attached to it and the header fades in and out together with the screen. This is a common pattern on Android.
    // none - No header will be rendered.
    { initialRouteName: 'Home', headerMode: 'float' }
);

export default createAppContainer(App);
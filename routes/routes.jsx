import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../views/Home'
import Detail from '../views/Detail'

const Stack = createNativeStackNavigator()
const routeScreenDefaultOptions = {
    headerStyle: {
        backgroundColor: '#001154',
    },
    headerTitleStyle: {
        color: '#fff',
        fontSize: 30,
    },
    headerTitleAlign: 'center',
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={routeScreenDefaultOptions}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={routeScreenDefaultOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();
function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Users"
                screenOptions={{
                    headerStyle: {
                        height: 50,
                        backgroundColor: '#7159c1',
                    },
                    headerTitleAlign: 'center',
                    headerBackTitle: false,
                    headerTintColor: '#FFFF',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                <Stack.Screen name="Users" component={Main} />
                <Stack.Screen name="GitHub" component={User} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;

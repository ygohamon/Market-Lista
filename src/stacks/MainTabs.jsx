import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';

import CustomTabs from '../components/CustomTabs';

const Tabs = createBottomTabNavigator();

export default () => {
    return (
        <Tabs.Navigator tabBar={props=><CustomTabs {...props} />} screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="Home" component={Home} screenOptions={{ headerShown: false }} />
        </Tabs.Navigator>
    );
}
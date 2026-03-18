import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import MainTabs from './MainTabs';
import Historico from '../screens/Historico';
import Membros from '../screens/Membros';
import OperationModal from '../components/Modal';

const Stack = createStackNavigator();

export default () => (
    <>
        <Stack.Navigator initialRouteName="Preload" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen name="Historico" component={Historico} />
            <Stack.Screen name="Membros" component={Membros} />
        </Stack.Navigator>
        <OperationModal />
    </>
);

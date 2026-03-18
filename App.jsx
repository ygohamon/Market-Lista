import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider, useAuth } from './src/contexts/auth';
import { AppProvider } from './src/contexts';
import AuthStack from './src/stacks/AuthStack';
import MainStack from './src/stacks/MainStack';

const AppNavigator = () => {
    const { user, carregando } = useAuth();

    if (carregando) {
        return (
            <View style={{ flex: 1, backgroundColor: '#12131A', alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator color="#F5C842" size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {user ? <MainStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default () => (
    <SafeAreaProvider>
        <AuthProvider>
            <AppProvider>
                <AppNavigator />
            </AppProvider>
        </AuthProvider>
    </SafeAreaProvider>
);

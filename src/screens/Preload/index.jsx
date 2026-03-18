import React, { useContext, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';
import AppContext from '../../contexts';
import { ListaAPI } from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const { dispatch } = useContext(AppContext);

    useEffect(() => {
        const load = async () => {
            try {
                const lista = await ListaAPI.getAtual();
                dispatch({ type: 'setDadosCompletos', payload: lista });
                // Recalcula total
                dispatch({ type: 'handleTotal' });
            } catch {
                // Sem conexão ou token expirado — continua com lista vazia
            }

            setTimeout(() => {
                navigation.reset({ routes: [{ name: 'MainTabs' }] });
            }, 1000);
        };

        load();
    }, []);

    return (
        <Container>
            <LottieView
                style={{ width: 300, alignSelf: 'center' }}
                speed={1}
                source={require('../../assets/load.json')}
                loop
                autoPlay
            />
        </Container>
    );
};

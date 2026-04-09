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
            const inicio = Date.now();
            try {
                const lista = await ListaAPI.getAtual();
                dispatch({ type: 'setDadosCompletos', payload: lista });
                dispatch({ type: 'handleTotal' });
            } catch {
                // Sem conexão ou token expirado — continua com lista vazia
            }

            // Garante animação mínima de 1s independente da velocidade da API
            const decorrido = Date.now() - inicio;
            const restante = Math.max(0, 1000 - decorrido);
            setTimeout(() => {
                navigation.reset({ routes: [{ name: 'MainTabs' }] });
            }, restante);
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

import React, { useContext, useEffect } from 'react';
import LottieView from  "lottie-react-native";

import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

import AppContext from '../../contexts';
import { Api } from '../../data';

export default () => {
  
    const navigation = useNavigation();
    const { dispatch } = useContext(AppContext);

    useEffect(async ()=>{

        let initialState = await Api.getDados();
        
        Api.setDados(initialState);
        
        dispatch({
            type: 'setDados',
            payload: initialState
        });
        
        dispatch({
            type: 'handleTotal',
            payload: true
        });
        
        setTimeout(()=>{
            navigation.reset({
                routes: [{
                    name: 'MainTabs'
                }]
            });
        }, 800)
    },[]);

    return (
        <Container>
            <LottieView
                style={{                
                    width: 300,
                    alignContent: 'center',
                    justifyContent: 'center'
                }}
                speed={1} 
                source={require("../../assets/load.json")}
                loop
                autoPlay
            />
        </Container>
    );
}

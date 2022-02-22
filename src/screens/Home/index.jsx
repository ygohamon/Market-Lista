import React, { useContext, useEffect } from 'react';
import {ScrollView} from 'react-native';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

import {
    AdMobBanner,
    setTestDeviceIDAsync
  } from 'expo-ads-admob';

import { Container, ListArea, Spacer } from './style'; 

import AppContext from '../../contexts';



export default () => {
    const { state, dispatch } = useContext(AppContext);

    const handleToggleDone = (item) => {
        dispatch({
            type: 'handleToggleDone',
            payload: {
                id: item.id,
                done: !item.done
            }
        });
        dispatch({
            type: 'handleTotal',
            payload: true
        })
    }

    const handleEdit = (item) => {
        dispatch({
            type: 'setEditItem',
            payload: item
        });

        dispatch({
            type: 'handleIsEdit',
            payload: true
        });

        dispatch({
            type: 'handleModal',
            payload: true
        });
    }


    const handleDelete = (item) => {
        dispatch({
            type: 'handleDeleteProduto', 
            payload: item.id
        });

        dispatch({
            type: 'handleTotal',
            payload: true
        })
    }

    useEffect(()=>{
        //console.log(state);
    }, []);

    return (
        <Container>
            <Header titulo="Lista de Compras" />
            <AdMobBanner
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-6444686362000646/4563333489" 
                servePersonalizedAds />
            <ListArea>
            <ScrollView>
                {state.produtos.length > 0 && state.produtos.map((item,key) => {
                    if(state.show_done === false && item.done === true) return;
                    return (
                        <ListItem 
                            key={key} 
                            item={item}
                            onPress={()=>{ handleToggleDone(item)}} 
                            handleLeft={()=>{handleDelete(item)}}
                            handleRight={()=>{handleEdit(item)}}
                            />
                    )
                })}
                <Spacer />
            </ScrollView>
            </ListArea>
        </Container>
    );
}
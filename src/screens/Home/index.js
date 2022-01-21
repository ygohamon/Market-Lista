import React, { useEffect, useState, useContext } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import ListItemBack from '../../components/ListItemBack';

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
        // getListas();
    }, []);

    return (
        <Container behavior={ Platform.OS === 'ios' ? 'padding' : 'margin' }>
            <Header titulo="Lista de Compras" />
            <ListArea>
                {state.produtos.length > 0 && state.produtos.map((item,key) => {
                    if(state.show_done === false && item.done === true) return;
                        return(

                <SwipeListView 
                    data={state.produtos} 
                    keyExtractor={data => `${data.id}`} 
                    renderItem={(data, rowMap) => <ListItem 
                        id={data.item.id} 
                        nome={data.item.nome} 
                        quantidade={data.item.quantidade} 
                        preco={data.item.preco} 
                        done={data.item.done} 
                        onPress={()=>handleToggleDone(data.item)}
                        onLongPress={()=>handleEdit(data.item)} 
                    />} 
                    renderHiddenItem={ (data, rowMap) => <ListItemBack onDelete={()=>handleDelete(data.item)} onEdit={()=>handleEdit(data.item)} />}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />
                )

            })}
            <Spacer />
            </ListArea>
        </Container>
    );
}
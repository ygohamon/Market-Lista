import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

import { Container, ListArea, Spacer, EmptyContainer, EmptyTitle, EmptyText } from './style';

import AppContext from '../../contexts';

export default () => {
    const { state, dispatch } = useContext(AppContext);

    const handleToggleDone = (item) => {
        dispatch({ type: 'handleToggleDone', payload: { id: item.id, done: !item.done } });
        dispatch({ type: 'handleTotal', payload: true });
    }

    const handleEdit = (item) => {
        dispatch({ type: 'setEditItem', payload: item });
        dispatch({ type: 'handleIsEdit', payload: true });
        dispatch({ type: 'handleModal', payload: true });
    }

    const handleDelete = (item) => {
        dispatch({ type: 'handleDeleteProduto', payload: item.id });
        dispatch({ type: 'handleTotal', payload: true });
    }

    const itensFiltrados = state.produtos.filter(item => {
        if (state.show_done === false && item.done === true) return false;
        return true;
    });

    return (
        <Container>
            <Header titulo="Lista de Compras" />
            <ListArea>
                <ScrollView>
                    {itensFiltrados.length > 0 ? (
                        <>
                            {itensFiltrados.map((item, key) => (
                                <ListItem
                                    key={key}
                                    item={item}
                                    onPress={() => handleToggleDone(item)}
                                    handleLeft={() => handleDelete(item)}
                                    handleRight={() => handleEdit(item)}
                                />
                            ))}
                            <Spacer />
                        </>
                    ) : (
                        <EmptyContainer>
                            <FontAwesome5 name="shopping-cart" size={52} color="#1E2030" />
                            <EmptyTitle>Lista vazia</EmptyTitle>
                            <EmptyText>Toque no + para adicionar{'\n'}o primeiro item</EmptyText>
                        </EmptyContainer>
                    )}
                </ScrollView>
            </ListArea>
        </Container>
    );
}

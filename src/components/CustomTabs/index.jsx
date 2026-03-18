import React, { useContext, useState } from 'react';
import { Alert, Modal, TextInput, View, Text, TouchableOpacity, Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import {
    TabArea, TabItem, TabItemFilled, TabItemPreco,
    PrecoContainer, Preco, PrecoSub, OrcamentoModal,
    OrcamentoFundo, OrcamentoJanela, OrcamentoTitulo,
    OrcamentoCampo, OrcamentoBotao, OrcamentoBotaoTexto, OrcamentoBotaoRow
} from './style';

import AppContext from '../../contexts';

export default () => {
    const { state, dispatch } = useContext(AppContext);
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const [modalOrcamento, setModalOrcamento] = useState(false);
    const [orcamentoInput, setOrcamentoInput] = useState('');

    const restante = state.orcamento > 0
        ? parseFloat(state.orcamento) - parseFloat(state.total)
        : null;
    const acima = restante !== null && restante < 0;

    const handleSalvarOrcamento = () => {
        const valor = parseFloat(orcamentoInput.replace(',', '.'));
        if (!isNaN(valor) && valor >= 0) {
            dispatch({ type: 'setOrcamento', payload: valor });
        }
        setModalOrcamento(false);
        setOrcamentoInput('');
    };

    return (
        <>
            <TabArea style={{ paddingBottom: insets.bottom }}>
                {/* Olho - mostrar/ocultar concluídos */}
                <TabItem onPress={() => dispatch({ type: 'handleShowDone', payload: !state.show_done })}>
                    <FontAwesome5
                        name={state.show_done ? 'eye' : 'eye-slash'}
                        size={20}
                        color={state.show_done ? '#F5C842' : '#4A4D5E'}
                    />
                </TabItem>

                {/* Histórico */}
                <TabItem onPress={() => navigation.navigate('Historico')}>
                    <FontAwesome5 name="history" size={20} color="#9094A6" />
                </TabItem>

                {/* Orçamento / Total — toque para definir orçamento */}
                <TabItemPreco onPress={() => {
                    setOrcamentoInput(state.orcamento > 0 ? String(state.orcamento) : '');
                    setModalOrcamento(true);
                }}>
                    <PrecoContainer acima={acima}>
                        <Preco acima={acima}>
                            {restante !== null
                                ? `R$ ${Math.abs(restante).toFixed(2)}${acima ? ' acima' : ' restam'}`
                                : `R$ ${parseFloat(state.total).toFixed(2)}`
                            }
                        </Preco>
                        {state.orcamento > 0 && (
                            <PrecoSub>de R$ {parseFloat(state.orcamento).toFixed(2)}</PrecoSub>
                        )}
                    </PrecoContainer>
                </TabItemPreco>

                {/* Membros */}
                <TabItem onPress={() => navigation.navigate('Membros')}>
                    <FontAwesome5 name="users" size={20} color="#9094A6" />
                </TabItem>

                {/* Adicionar produto */}
                <TabItemFilled onPress={() => dispatch({ type: 'handleModal', payload: true })}>
                    <FontAwesome5 name="plus" size={20} color="#F5C842" />
                </TabItemFilled>
            </TabArea>

            {/* Modal de orçamento */}
            <OrcamentoModal
                animationType="fade"
                transparent
                visible={modalOrcamento}
                onRequestClose={() => setModalOrcamento(false)}
            >
                <OrcamentoFundo onPress={() => setModalOrcamento(false)} activeOpacity={1}>
                    <OrcamentoJanela>
                        <OrcamentoTitulo>Definir orçamento</OrcamentoTitulo>
                        <OrcamentoCampo
                            placeholder="Ex: 350,00"
                            placeholderTextColor="#4A4D5E"
                            value={orcamentoInput}
                            onChangeText={setOrcamentoInput}
                            keyboardType="decimal-pad"
                            returnKeyType="done"
                            onSubmitEditing={handleSalvarOrcamento}
                            autoFocus
                        />
                        <OrcamentoBotaoRow>
                            <OrcamentoBotao cancelar onPress={() => setModalOrcamento(false)}>
                                <OrcamentoBotaoTexto cancelar>Cancelar</OrcamentoBotaoTexto>
                            </OrcamentoBotao>
                            <OrcamentoBotao onPress={handleSalvarOrcamento}>
                                <OrcamentoBotaoTexto>Salvar</OrcamentoBotaoTexto>
                            </OrcamentoBotao>
                        </OrcamentoBotaoRow>
                    </OrcamentoJanela>
                </OrcamentoFundo>
            </OrcamentoModal>
        </>
    );
};

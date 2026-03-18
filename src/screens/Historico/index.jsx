import React, { useState, useEffect, useContext } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ListaAPI } from '../../services/api';
import AppContext from '../../contexts';
import Header from '../../components/Header';

import {
    Container, ListaScroll, MesCard, MesCabecalho, MesTitulo, MesAno,
    MesStats, StatItem, StatValor, StatLabel, OrcamentoBar, OrcamentoFill,
    BotaoReaproveitar, BotaoReaproveitarTexto,
    EmptyContainer, EmptyTexto, Carregando
} from './style';

const MESES = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

export default () => {
    const { dispatch } = useContext(AppContext);
    const insets = useSafeAreaInsets();
    const [historico, setHistorico] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [reaproveitando, setReaproveitando] = useState(null);

    useEffect(() => {
        carregarHistorico();
    }, []);

    const carregarHistorico = async () => {
        setCarregando(true);
        try {
            const dados = await ListaAPI.getHistorico();
            setHistorico(dados);
        } catch (err) {
            Alert.alert('Erro', 'Não foi possível carregar o histórico');
        } finally {
            setCarregando(false);
        }
    };

    const handleReaproveitar = (lista) => {
        Alert.alert(
            'Reaproveitar lista',
            `Copiar os ${lista.produtos.length} produtos de ${MESES[lista.mes - 1]} ${lista.ano} para o mês atual?\n\nOs preços serão zerados para atualização no mercado.`,
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Reaproveitar',
                    onPress: async () => {
                        setReaproveitando(lista._id);
                        try {
                            const novaLista = await ListaAPI.reaproveitar(lista._id);
                            dispatch({ type: 'setDadosCompletos', payload: novaLista });
                            Alert.alert('Pronto!', 'Produtos copiados para o mês atual. Atualize os preços no mercado!');
                        } catch (err) {
                            Alert.alert('Erro', err.message);
                        } finally {
                            setReaproveitando(null);
                        }
                    }
                }
            ]
        );
    };

    const calcularProgresso = (lista) => {
        if (!lista.orcamento || lista.orcamento === 0) return null;
        return Math.min(lista.total / lista.orcamento, 1.2);
    };

    if (carregando) {
        return (
            <Container>
                <Header titulo="Histórico" />
                <Carregando>
                    <ActivityIndicator color="#F5C842" size="large" />
                </Carregando>
            </Container>
        );
    }

    return (
        <Container>
            <Header titulo="Histórico" />
            <ListaScroll
                contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
                showsVerticalScrollIndicator={false}
            >
                {historico.length === 0 ? (
                    <EmptyContainer>
                        <FontAwesome5 name="history" size={48} color="#1E2030" />
                        <EmptyTexto>
                            Nenhum histórico ainda.{'\n'}
                            Complete um mês de compras para ver o histórico aqui.
                        </EmptyTexto>
                    </EmptyContainer>
                ) : (
                    historico.map((lista) => {
                        const progresso = calcularProgresso(lista);
                        const acima = lista.total > lista.orcamento && lista.orcamento > 0;
                        const concluidos = lista.produtos.filter(p => p.done).length;

                        return (
                            <MesCard key={lista._id}>
                                <MesCabecalho>
                                    <MesTitulo>{MESES[lista.mes - 1]}</MesTitulo>
                                    <MesAno>{lista.ano}</MesAno>
                                </MesCabecalho>

                                <MesStats>
                                    <StatItem>
                                        <StatValor>{lista.produtos.length}</StatValor>
                                        <StatLabel>Produtos</StatLabel>
                                    </StatItem>
                                    <StatItem>
                                        <StatValor>{concluidos}</StatValor>
                                        <StatLabel>Comprados</StatLabel>
                                    </StatItem>
                                    <StatItem>
                                        <StatValor destaque>R$ {parseFloat(lista.total).toFixed(2)}</StatValor>
                                        <StatLabel>Total gasto</StatLabel>
                                    </StatItem>
                                    {lista.orcamento > 0 && (
                                        <StatItem>
                                            <StatValor style={{ color: acima ? '#FF5757' : '#B8E14A' }}>
                                                R$ {parseFloat(lista.orcamento).toFixed(2)}
                                            </StatValor>
                                            <StatLabel>Orçamento</StatLabel>
                                        </StatItem>
                                    )}
                                </MesStats>

                                {progresso !== null && (
                                    <OrcamentoBar>
                                        <OrcamentoFill
                                            acima={acima}
                                            style={{ width: `${Math.min(progresso * 100, 100)}%` }}
                                        />
                                    </OrcamentoBar>
                                )}

                                <BotaoReaproveitar
                                    onPress={() => handleReaproveitar(lista)}
                                    disabled={reaproveitando === lista._id}
                                >
                                    {reaproveitando === lista._id
                                        ? <ActivityIndicator color="#F5C842" size="small" />
                                        : <>
                                            <FontAwesome5 name="redo" size={14} color="#F5C842" />
                                            <BotaoReaproveitarTexto>Reaproveitar para este mês</BotaoReaproveitarTexto>
                                          </>
                                    }
                                </BotaoReaproveitar>
                            </MesCard>
                        );
                    })
                )}
            </ListaScroll>
        </Container>
    );
};

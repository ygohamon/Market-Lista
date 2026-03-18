import React, { useState, useEffect, useContext } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { UserAPI } from '../../services/api';
import { useAuth } from '../../contexts/auth';
import AppContext from '../../contexts';
import Header from '../../components/Header';

import {
    Container, Conteudo, Secao, SecaoTitulo,
    MembroCard, MembroAvatar, MembroAvatarLetra, MembroInfo,
    MembroNome, MembroEmail, MembroBadge, MembroBadgeTexto, BotaoRemover,
    BuscaArea, BuscaInput, BuscaBotao,
    ResultadoCard, BotaoAdicionar, BotaoAdicionarTexto, Erro
} from './style';

export default () => {
    const { user } = useAuth();
    const { state, dispatch } = useContext(AppContext);
    const insets = useSafeAreaInsets();

    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState(null);
    const [erroBusca, setErroBusca] = useState('');
    const [buscando, setBuscando] = useState(false);
    const [adicionando, setAdicionando] = useState(false);

    const membros = state.membros || [];
    const souDono = state.ownerEmail === user?.email;

    const handleBuscar = async () => {
        if (!busca.trim()) return;
        setErroBusca('');
        setResultado(null);
        setBuscando(true);
        try {
            const encontrado = await UserAPI.buscar(busca.trim());
            if (encontrado.email === user.email) {
                setErroBusca('Este é você!');
            } else if (membros.some(m => m.email === encontrado.email)) {
                setErroBusca('Este usuário já está na lista');
            } else {
                setResultado(encontrado);
            }
        } catch (err) {
            setErroBusca(err.message);
        } finally {
            setBuscando(false);
        }
    };

    const handleAdicionar = async () => {
        if (!resultado) return;
        setAdicionando(true);
        try {
            const novosMembros = await UserAPI.adicionarMembro(resultado._id);
            dispatch({ type: 'setMembros', payload: novosMembros });
            setResultado(null);
            setBusca('');
        } catch (err) {
            Alert.alert('Erro', err.message);
        } finally {
            setAdicionando(false);
        }
    };

    const handleRemover = (membro) => {
        Alert.alert(
            'Remover membro',
            `Remover ${membro.nome} da lista?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Remover',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            const novosMembros = await UserAPI.removerMembro(membro._id);
                            dispatch({ type: 'setMembros', payload: novosMembros });
                        } catch (err) {
                            Alert.alert('Erro', err.message);
                        }
                    }
                }
            ]
        );
    };

    return (
        <Container>
            <Header titulo="Membros" />
            <Conteudo
                contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
                showsVerticalScrollIndicator={false}
            >
                <Secao>
                    <SecaoTitulo>Participantes da lista</SecaoTitulo>

                    {/* Dono */}
                    <MembroCard>
                        <MembroAvatar>
                            <MembroAvatarLetra>{user?.nome?.[0] || '?'}</MembroAvatarLetra>
                        </MembroAvatar>
                        <MembroInfo>
                            <MembroNome>{user?.nome}</MembroNome>
                            <MembroEmail>{user?.email}</MembroEmail>
                        </MembroInfo>
                        <MembroBadge>
                            <MembroBadgeTexto>Você</MembroBadgeTexto>
                        </MembroBadge>
                    </MembroCard>

                    {/* Membros */}
                    {membros.map((membro) => (
                        <MembroCard key={membro._id || membro.email}>
                            <MembroAvatar>
                                <MembroAvatarLetra>{membro.nome?.[0] || '?'}</MembroAvatarLetra>
                            </MembroAvatar>
                            <MembroInfo>
                                <MembroNome>{membro.nome}</MembroNome>
                                <MembroEmail>{membro.email}</MembroEmail>
                            </MembroInfo>
                            {souDono && (
                                <BotaoRemover onPress={() => handleRemover(membro)}>
                                    <FontAwesome5 name="times" size={14} color="#FF5757" />
                                </BotaoRemover>
                            )}
                        </MembroCard>
                    ))}
                </Secao>

                {souDono && (
                    <Secao>
                        <SecaoTitulo>Adicionar membro</SecaoTitulo>

                        <BuscaArea>
                            <BuscaInput
                                placeholder="Buscar pelo email..."
                                placeholderTextColor="#4A4D5E"
                                value={busca}
                                onChangeText={(t) => { setBusca(t); setErroBusca(''); setResultado(null); }}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                returnKeyType="search"
                                onSubmitEditing={handleBuscar}
                            />
                            <BuscaBotao onPress={handleBuscar} disabled={buscando}>
                                {buscando
                                    ? <ActivityIndicator color="#F5C842" size="small" />
                                    : <FontAwesome5 name="search" size={16} color="#F5C842" />
                                }
                            </BuscaBotao>
                        </BuscaArea>

                        {erroBusca !== '' && <Erro>{erroBusca}</Erro>}

                        {resultado && (
                            <ResultadoCard>
                                <MembroAvatar>
                                    <MembroAvatarLetra>{resultado.nome?.[0]}</MembroAvatarLetra>
                                </MembroAvatar>
                                <MembroInfo>
                                    <MembroNome>{resultado.nome}</MembroNome>
                                    <MembroEmail>{resultado.email}</MembroEmail>
                                </MembroInfo>
                                <BotaoAdicionar onPress={handleAdicionar} disabled={adicionando}>
                                    {adicionando
                                        ? <ActivityIndicator color="#12131A" size="small" />
                                        : <BotaoAdicionarTexto>Adicionar</BotaoAdicionarTexto>
                                    }
                                </BotaoAdicionar>
                            </ResultadoCard>
                        )}
                    </Secao>
                )}

                {!souDono && (
                    <Secao>
                        <SecaoTitulo style={{ color: '#4A4D5E' }}>
                            Apenas o dono da lista pode gerenciar membros
                        </SecaoTitulo>
                    </Secao>
                )}
            </Conteudo>
        </Container>
    );
};

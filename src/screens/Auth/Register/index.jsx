import React, { useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AuthAPI } from '../../../services/api';
import { useAuth } from '../../../contexts/auth';

import {
    Container, Logo, LogoTitle, LogoSubtitle, Card,
    Campo, Botao, BotaoTexto, LinkArea, LinkTexto, LinkDestaque, Erro
} from './style';

export default ({ navigation }) => {
    const { login } = useAuth();
    const insets = useSafeAreaInsets();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const handleCadastro = async () => {
        setErro('');
        if (!nome || !email || !senha || !confirmar) {
            setErro('Preencha todos os campos');
            return;
        }
        if (senha !== confirmar) {
            setErro('As senhas não coincidem');
            return;
        }
        if (senha.length < 6) {
            setErro('A senha deve ter ao menos 6 caracteres');
            return;
        }
        setCarregando(true);
        try {
            const { token, user } = await AuthAPI.cadastro(nome.trim(), email.trim(), senha);
            await login(user, token);
        } catch (err) {
            setErro(err.message);
        } finally {
            setCarregando(false);
        }
    };

    return (
        <Container
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ paddingTop: insets.top + 16 }}
        >
            <Logo>
                <FontAwesome5 name="shopping-cart" size={40} color="#F5C842" />
                <LogoTitle>Criar Conta</LogoTitle>
                <LogoSubtitle>Market Lista</LogoSubtitle>
            </Logo>

            <Card>
                {erro !== '' && <Erro>{erro}</Erro>}

                <Campo
                    placeholder="Nome"
                    placeholderTextColor="#4A4D5E"
                    value={nome}
                    onChangeText={setNome}
                    returnKeyType="next"
                />
                <Campo
                    placeholder="Email"
                    placeholderTextColor="#4A4D5E"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    returnKeyType="next"
                />
                <Campo
                    placeholder="Senha"
                    placeholderTextColor="#4A4D5E"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                    returnKeyType="next"
                />
                <Campo
                    placeholder="Confirmar senha"
                    placeholderTextColor="#4A4D5E"
                    value={confirmar}
                    onChangeText={setConfirmar}
                    secureTextEntry
                    returnKeyType="done"
                    onSubmitEditing={handleCadastro}
                />

                <Botao onPress={handleCadastro} disabled={carregando}>
                    {carregando
                        ? <ActivityIndicator color="#12131A" />
                        : <BotaoTexto>Cadastrar</BotaoTexto>
                    }
                </Botao>
            </Card>

            <LinkArea onPress={() => navigation.navigate('Login')}>
                <LinkTexto>
                    Já tem conta? <LinkDestaque>Entrar</LinkDestaque>
                </LinkTexto>
            </LinkArea>
        </Container>
    );
};

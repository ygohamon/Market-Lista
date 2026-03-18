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
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const handleLogin = async () => {
        setErro('');
        if (!email || !senha) {
            setErro('Preencha email e senha');
            return;
        }
        setCarregando(true);
        try {
            const { token, user } = await AuthAPI.login(email.trim(), senha);
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
                <FontAwesome5 name="shopping-cart" size={48} color="#F5C842" />
                <LogoTitle>Market Lista</LogoTitle>
                <LogoSubtitle>Suas compras organizadas</LogoSubtitle>
            </Logo>

            <Card>
                {erro !== '' && <Erro>{erro}</Erro>}

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
                    returnKeyType="done"
                    onSubmitEditing={handleLogin}
                />

                <Botao onPress={handleLogin} disabled={carregando}>
                    {carregando
                        ? <ActivityIndicator color="#12131A" />
                        : <BotaoTexto>Entrar</BotaoTexto>
                    }
                </Botao>
            </Card>

            <LinkArea onPress={() => navigation.navigate('Register')}>
                <LinkTexto>
                    Não tem conta? <LinkDestaque>Cadastre-se</LinkDestaque>
                </LinkTexto>
            </LinkArea>
        </Container>
    );
};

import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #12131A;
    align-items: center;
    justify-content: center;
    padding: 32px 24px;
`;

export const Logo = styled.View`
    align-items: center;
    margin-bottom: 40px;
`;

export const LogoTitle = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #F5C842;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 12px;
`;

export const LogoSubtitle = styled.Text`
    font-size: 13px;
    color: #9094A6;
    margin-top: 4px;
    letter-spacing: 1px;
`;

export const Card = styled.View`
    width: 100%;
    background-color: #1A1B26;
    border-radius: 20px;
    padding: 28px 24px;
    border-width: 1px;
    border-color: #252636;
`;

export const Campo = styled.TextInput`
    height: 52px;
    background-color: #252636;
    border-radius: 12px;
    padding: 0 16px;
    color: #FFFFFF;
    font-size: 16px;
    margin-bottom: 14px;
    border-width: 1px;
    border-color: #2A2D3E;
`;

export const Botao = styled.TouchableOpacity`
    width: 100%;
    height: 52px;
    background-color: #F5C842;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
`;

export const BotaoTexto = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #12131A;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const LinkArea = styled.TouchableOpacity`
    margin-top: 24px;
    align-items: center;
`;

export const LinkTexto = styled.Text`
    font-size: 14px;
    color: #9094A6;
`;

export const LinkDestaque = styled.Text`
    color: #F5C842;
    font-weight: bold;
`;

export const Erro = styled.Text`
    color: #FF5757;
    font-size: 13px;
    margin-bottom: 12px;
    text-align: center;
`;

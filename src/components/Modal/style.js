import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Modal = styled.Modal`
    flex: 1;
`;

export const Fundo = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.65);
`;

export const Janela = styled.View`
    width: 100%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    background-color: #1A1B26;
    padding-bottom: 32px;
`;

export const JanelaInner = styled.ScrollView`
    width: 100%;
`;

export const Titulo = styled.Text`
    width: 100%;
    font-size: 18px;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
    padding: 22px 0 18px 0;
    border-bottom-width: 1px;
    border-bottom-color: #252636;
    margin-bottom: 20px;
    letter-spacing: 0.5px;
`;

export const InfosArea = styled.View`
    width: 100%;
    padding: 0 20px 8px 20px;
`;

export const CampoArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 14px;
`;

export const Campo = styled.TextInput`
    height: 52px;
    padding: 0 16px;
    background-color: #252636;
    border-radius: 12px;
    border-width: 1px;
    border-color: #2A2D3E;
    color: #FFFFFF;
    font-size: 16px;
`;

export const CampoQuantidade = styled(Campo)`
    width: 110px;
    margin-right: 12px;
`;

export const CampoNome = styled(Campo)`
    flex: 1;
    width: 100%;
`;

export const CampoPreco = styled(TextInputMask)`
    flex: 1;
    width: 100%;
    height: 52px;
    padding: 0 16px;
    background-color: #252636;
    border-radius: 12px;
    border-width: 1px;
    border-color: #2A2D3E;
    color: #FFFFFF;
    font-size: 16px;
`;

export const Botao = styled.TouchableOpacity`
    width: 100%;
    height: 52px;
    border-radius: 12px;
    background-color: #F5C842;
    align-items: center;
    justify-content: center;
    margin-top: 6px;
`;

export const BotaoTexto = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #12131A;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const CloseButton = styled.TouchableOpacity`
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
`;

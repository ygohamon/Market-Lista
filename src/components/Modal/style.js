import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Modal = styled.Modal`
    flex: 1;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

export const Fundo = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 5px;
    background-color: rgba(0,0,0, .7);
`;

export const Janela = styled.View`
    width: 100%;
    min-height: 100px;
    border-radius: 5px;
    background-color: #212226;
`;

export const JanelaInner = styled.ScrollView`
    width: 100%;
    border-radius: 5px;
`;

export const Titulo = styled.Text`
    width: 100%;
    font-size: 24px;
    color: #D3e23a;
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
    margin-bottom: 30px;
    background-color: #393939;
`;

export const InfosArea = styled.View`
    width: 100%;
    padding: 0 10px 10px 10px;
`;

export const CampoArea = styled.View`
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`;

export const Campo = styled.TextInput`
    height: 50px;
    padding: 0 10px;
    background-color: #393939;
    border-radius: 5px;
    border-bottom-width: 2px;
    border-color: #D3e23a;
    color: #D3e23a;
    font-size: 16px;
`;

export const CampoQuantidade = styled(Campo)`
    width: 120px;
    margin-right: 15px;
    border-radius: 5px;
`;

export const CampoNome = styled(Campo)`
    flex: 1;
    width: 100%;
    border-radius: 5px;  
`;

export const CampoPreco = styled(TextInputMask)`
    flex: 1;
    width: 100%;
    height: 50px;
    padding: 0 10px;
    background-color: #393939;
    border-radius: 5px;
    border-bottom-width: 2px;
    border-color: #D3e23a;
    color: #D3e23a;
    font-size: 16px;
    border-radius: 5px;
`;

export const Botao = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: #D3e23a;
    align-items: center;
    justify-content: center;
`;

export const BotaoTexto = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: #FFFFFF;
    text-transform: uppercase;
    border-radius: 5px;
`;

export const CloseButton = styled.TouchableOpacity`
    position: absolute;
    top: 13px; right: 13px;
    z-index: 2;
`;
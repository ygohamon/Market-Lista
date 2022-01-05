import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Modal = styled.Modal`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Fundo = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: rgba(0,0,0, .7);
`;

export const Janela = styled.View`
    width: 100%;
    min-height: 100px;
    border-radius: 5px;
    background-color: #FFF;
`;

export const JanelaInner = styled.ScrollView`
    width: 100%;
`;

export const Titulo = styled.Text`
    width: 100%;
    font-size: 24px;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
    margin-bottom: 30px;
    background-color: #7f1e84;
    border-radius: 5px;
`;

export const InfosArea = styled.View`
    width: 100%;
    padding: 0 10px 10px 10px;
`;

export const CampoArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`;

export const Campo = styled.TextInput`
    height: 50px;
    padding: 0 10px;
    background-color: #EAEAEA;
    border-radius: 5;
    border-bottom-width: 2px;
    border-color: #7f1e84;
    color: #7f1e84;
    font-size: 16px;
`;

export const CampoQuantidade = styled(Campo)`
    width: 120px;
    margin-right: 15px;
`;

export const CampoNome = styled(Campo)`
    flex: 1;
    width: 100%;  
`;

export const CampoPreco = styled(TextInputMask)`
    flex: 1;
    width: 100%;
    height: 50px;
    padding: 0 10px;
    background-color: #EAEAEA;
    border-radius: 0;
    border-bottom-width: 2px;
    border-color: #7f1e84;
    color: #7f1e84;
    font-size: 16px;
`;

export const Botao = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border-radius: 5;
    background-color: #7f1e84;
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
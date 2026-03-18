import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #12131A;
`;

export const Conteudo = styled.ScrollView`
    flex: 1;
    padding: 16px;
`;

export const Secao = styled.View`
    margin-bottom: 24px;
`;

export const SecaoTitulo = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #9094A6;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-left: 4px;
`;

export const MembroCard = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #1A1B26;
    border-radius: 14px;
    padding: 14px 16px;
    margin-bottom: 8px;
    border-width: 1px;
    border-color: #252636;
`;

export const MembroAvatar = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #252636;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
`;

export const MembroAvatarLetra = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #F5C842;
    text-transform: uppercase;
`;

export const MembroInfo = styled.View`
    flex: 1;
`;

export const MembroNome = styled.Text`
    font-size: 15px;
    font-weight: 600;
    color: #FFFFFF;
`;

export const MembroEmail = styled.Text`
    font-size: 12px;
    color: #9094A6;
    margin-top: 2px;
`;

export const MembroBadge = styled.View`
    background-color: #F5C842;
    border-radius: 6px;
    padding: 3px 8px;
`;

export const MembroBadgeTexto = styled.Text`
    font-size: 11px;
    font-weight: bold;
    color: #12131A;
`;

export const BotaoRemover = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: #2A1B1B;
    align-items: center;
    justify-content: center;
`;

export const BuscaArea = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #1A1B26;
    border-radius: 14px;
    padding: 0 16px;
    border-width: 1px;
    border-color: #252636;
    margin-bottom: 12px;
`;

export const BuscaInput = styled.TextInput`
    flex: 1;
    height: 52px;
    color: #FFFFFF;
    font-size: 15px;
`;

export const BuscaBotao = styled.TouchableOpacity`
    padding: 8px;
`;

export const ResultadoCard = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #1E2030;
    border-radius: 14px;
    padding: 14px 16px;
    border-width: 1px;
    border-color: #B8E14A;
`;

export const BotaoAdicionar = styled.TouchableOpacity`
    background-color: #B8E14A;
    border-radius: 10px;
    padding: 8px 16px;
`;

export const BotaoAdicionarTexto = styled.Text`
    font-weight: bold;
    font-size: 13px;
    color: #12131A;
`;

export const Erro = styled.Text`
    color: #FF5757;
    font-size: 13px;
    margin-bottom: 8px;
    margin-left: 4px;
`;

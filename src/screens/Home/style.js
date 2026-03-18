import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #12131A;
    width: 100%;
`;

export const ListArea = styled.View`
    flex: 1;
    width: 100%;
    background-color: #12131A;
`;

export const Spacer = styled.View`
    width: 100%;
    height: 20px;
`;

export const EmptyContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 40px;
    margin-top: 40px;
`;

export const EmptyTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #2A2D3E;
    margin-top: 20px;
    margin-bottom: 8px;
`;

export const EmptyText = styled.Text`
    font-size: 14px;
    color: #1E2030;
    text-align: center;
    line-height: 22px;
`;

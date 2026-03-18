import styled from 'styled-components/native';

export const HeaderArea = styled.View`
    background-color: #12131A;
    border-bottom-width: 1px;
    border-bottom-color: #1E2030;
    padding-bottom: 0;
`;

export const HeaderTitleArea = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 4px 20px 12px 16px;
`;

export const HeaderTitle = styled.Text`
    font-size: 19px;
    font-weight: bold;
    color: #F5C842;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-left: 10px;
    flex: 1;
`;

export const HeaderStats = styled.View`
    padding: 0 20px 10px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderStatText = styled.Text`
    font-size: 13px;
    font-weight: 600;
    color: #9094A6;
`;

export const ProgressBarContainer = styled.View`
    height: 3px;
    background-color: #1E2030;
    width: 100%;
`;

export const ProgressBarFill = styled.View`
    height: 3px;
    background-color: #B8E14A;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
`;

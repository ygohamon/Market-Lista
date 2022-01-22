import styled from 'styled-components/native';

export const HeaderArea = styled.View`
    width: 100%;
    position: relative;
`;

export const HeaderImage = styled.Image.attrs({
    resizeMode: 'cover',
    overflow: 'visible'
})`
    width: 100%;
    height: 180px;
    z-index: 4; 
    flex-direction: row;
`;

export const HeaderTitleArea = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 0px 20px;
    align-content: center;
    justify-content: center;
    background-color: #eebb2c;
`;

export const HeaderTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #FFF;

`;
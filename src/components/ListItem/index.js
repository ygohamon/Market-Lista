import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import {
    ListItemContainer,
    ListItemInner,
    ListInnerContainer,
    Infos,
    Nome,
    InfoText,
    CheckArea,
    CheckButton
} from './style';

export default ({id, nome, quantidade, preco, done, onPress, onLongPress}) => {

    return (
        <ListItemContainer key={id}>
            <ListItemInner onPress={onPress}>
                <ListInnerContainer>
                    <Infos>
                        <Nome>{nome}</Nome>
                        <InfoText>Quantidade: {quantidade}</InfoText>
                        <InfoText>Preço: R$ {parseFloat(preco).toFixed(2)} - Total: R$ {parseFloat((quantidade*preco)).toFixed(2)}</InfoText>
                    </Infos>
                    <CheckArea>
                        <CheckButton done={done == true ? true : false}>
                            <FontAwesome name="check" size={24} color="#FFFFFF" />
                        </CheckButton>
                    </CheckArea>
                </ListInnerContainer>
            </ListItemInner>
        </ListItemContainer>
    );
}
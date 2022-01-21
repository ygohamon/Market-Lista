import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import {
    BackArea,
    BotaoDelete,
    BotaoEdit
} from './style';

export default ({onDelete, onEdit}) => {
    return (
        <BackArea>
            <BotaoDelete onPress={onDelete}>
                <FontAwesome name="trash" size={24} color="#FFFFFF" style={{paddingRight: 5}} />
            </BotaoDelete>
            <BotaoEdit onPress={onEdit}>
                <FontAwesome name="edit" size={24} color="#FFFFFF" style={{paddingLeft: 5}} />
            </BotaoEdit>
        </BackArea>
    );
}
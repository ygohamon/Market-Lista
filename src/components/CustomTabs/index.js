import React, { useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import {
    TabArea, 
    TabItem, 
    TabItemFilled, 
    TabItemPreco, 
    PrecoContainer, 
    Preco
} from './style';

import AppContext from '../../contexts';

export default () => {

    const { state: appstate, dispatch } = useContext(AppContext);
    
    const handleModal = () => {
        dispatch({
            type: 'handleModal',
            payload: true
        })
    }

    const handleShowDone = (what) => {
        dispatch({
            type: 'handleShowDone',
            payload: what
        })
    }

    return (
        <TabArea>
            {appstate.show_done === false && <TabItem onPress={()=>{
                handleShowDone(true);
            }}>
                <FontAwesome 
                    name="eye-slash" 
                    size={24} 
                    color="#833f8c"
                />
            </TabItem>}
            {appstate.show_done === true && <TabItem onPress={()=>{
                handleShowDone(false)
            }}>
                <FontAwesome 
                    name="eye" 
                    size={26} 
                    color="#833f8c"
                />
            </TabItem>}
            <TabItemPreco>
                <PrecoContainer>
                    <Preco>{`R$ ${appstate.total}`}</Preco>
                </PrecoContainer>
            </TabItemPreco>
            <TabItemFilled onPress={handleModal}>
                <FontAwesome 
                    name="plus-square" 
                    size={24} 
                    color="#FFFFFF" 
                />
            </TabItemFilled>
        </TabArea>
    );
}


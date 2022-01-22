import React, { useContext } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

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
                <FontAwesome5 
                    name="eye-slash" 
                    size={24} 
                    color="#fdf8ea"
                />
            </TabItem>}
            {appstate.show_done === true && <TabItem onPress={()=>{
                handleShowDone(false)
            }}>
                <FontAwesome5 
                    name="eye" 
                    size={26} 
                    color="#fdf8ea"
                />
            </TabItem>}
            <TabItemPreco>
                <PrecoContainer>
                    <Preco>{`R$ ${appstate.total}`}</Preco>
                </PrecoContainer>
            </TabItemPreco>
            <TabItemFilled onPress={handleModal}>
                <FontAwesome5 
                    name="plus" 
                    size={24} 
                    color="#FFFFFF" 
                />
            </TabItemFilled>
        </TabArea>
    );
}


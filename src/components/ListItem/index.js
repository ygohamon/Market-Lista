import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Animated } from 'react-native';

import {
    ListItemContainer,
    ListItemInner,
    ListInnerContainer,
    Infos,
    Nome,
    InfoText,
    CheckArea,
    CheckButton,
    BotaoDelete,
    BotaoEdit
} from './style';

export default ({item, onPress, onLongPress, handleLeft, handleRight, onDelete, onEdit}) => {

    
    function LeftActions({progress, dragX}){

        const scale = dragX.interpolate({
          inputRange:[0, 100],
          outputRange:[0, 1],
          extrapolate: 'clamp'
        })
    
        return(
        <BotaoDelete onPress={onDelete} >
            <Animated.View style={[{ transform: [{ scale: scale}]}]}>
              <FontAwesome5 name="trash" size={24} color="#FFF" style={{paddingRight: 5}} />
            </Animated.View>
        </BotaoDelete>
        );
      }
    
      function RightActions({progress, dragX}){
    
        const scale = dragX.interpolate({
          inputRange:[-100, 0],
          outputRange:[1, 0],
          extrapolate: 'clamp'
        })
    
        return(
        <BotaoEdit onPress={onEdit} >
            <Animated.View style={[{ transform: [{ scale: scale}]}]}>
              <FontAwesome5 name="pen" size={24} color="#FFF" style={{paddingRight: 5}} />
            </Animated.View>
        </BotaoEdit>
        );
      }

      
    return (
    
        <ListItemContainer key={`${item.id}`}>
            <Swipeable
                renderLeftActions={
                    (progress, dragX)=> 
                    <LeftActions progress={progress} dragX={dragX} onPress={handleLeft} />
                }
                onSwipeableLeftOpen={handleLeft}
                renderRightActions={(progress, dragX)=> 
                    <RightActions progress={progress} dragX={dragX} onPress={handleRight} />
                }
                onSwipeableRightOpen={handleRight}
            >
            
            <ListItemInner onPress={onPress} onLongPress={onLongPress}>
            <ListInnerContainer>
                    <Infos>
                        <Nome>{item.nome}</Nome>
                        <InfoText>Quantidade: {item.quantidade}</InfoText>
                        <InfoText>Preço: R$ {parseFloat(item.preco).toFixed(2)} - Total: R$ {parseFloat((item.quantidade*item.preco)).toFixed(2)}</InfoText>
                    </Infos>
                    <CheckArea>
                        <CheckButton done={item.done == true ? true : false}>
                            <FontAwesome5 name="check" size={24} color="#FFFFFF" />
                        </CheckButton>
                    </CheckArea>
                </ListInnerContainer>
            </ListItemInner>
            
            </Swipeable> 
        </ListItemContainer>
        
    );
}

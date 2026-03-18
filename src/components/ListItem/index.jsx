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
    TotalText,
    CheckArea,
    CheckButton,
    BotaoDelete,
    BotaoEdit
} from './style';

export default ({item, onPress, onLongPress, handleLeft, handleRight}) => {

    function LeftActions({progress, dragX}) {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });

        return (
            <BotaoDelete onPress={handleLeft}>
                <Animated.View style={[{ transform: [{ scale: scale }] }]}>
                    <FontAwesome5 name="trash" size={22} color="#FFF" />
                </Animated.View>
            </BotaoDelete>
        );
    }

    function RightActions({progress, dragX}) {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        });

        return (
            <BotaoEdit onPress={handleRight}>
                <Animated.View style={[{ transform: [{ scale: scale }] }]}>
                    <FontAwesome5 name="pen" size={22} color="#FFF" />
                </Animated.View>
            </BotaoEdit>
        );
    }

    const total = parseFloat((item.quantidade * item.preco)).toFixed(2);

    return (
        <ListItemContainer>
            <Swipeable
                renderLeftActions={(progress, dragX) =>
                    <LeftActions progress={progress} dragX={dragX} />
                }
                onSwipeableLeftOpen={handleLeft}
                renderRightActions={(progress, dragX) =>
                    <RightActions progress={progress} dragX={dragX} />
                }
                onSwipeableRightOpen={handleRight}
            >
                <ListItemInner onPress={onPress} onLongPress={onLongPress}>
                    <ListInnerContainer done={item.done}>
                        <Infos>
                            <Nome done={item.done}>{item.nome}</Nome>
                            <InfoText>Qtd: {item.quantidade}  ·  R$ {parseFloat(item.preco).toFixed(2)} un</InfoText>
                            <TotalText>Total: R$ {total}</TotalText>
                        </Infos>
                        <CheckArea>
                            <CheckButton done={item.done}>
                                <FontAwesome5
                                    name="check"
                                    size={16}
                                    color={item.done ? '#1E2030' : '#3A3D4E'}
                                />
                            </CheckButton>
                        </CheckArea>
                    </ListInnerContainer>
                </ListItemInner>
            </Swipeable>
        </ListItemContainer>
    );
}

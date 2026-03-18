import React, { useContext } from 'react';
import LottieView from 'lottie-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AppContext from '../../contexts';

import {
    HeaderArea,
    HeaderTitleArea,
    HeaderTitle,
    HeaderStats,
    HeaderStatText,
    ProgressBarContainer,
    ProgressBarFill,
} from './style';

export default ({ titulo }) => {
    const insets = useSafeAreaInsets();
    const { state } = useContext(AppContext);

    const total = state.produtos.length;
    const done = state.produtos.filter(p => p.done).length;
    const progress = total > 0 ? done / total : 0;

    return (
        <HeaderArea style={{ paddingTop: insets.top + 8 }}>
            <HeaderTitleArea>
                <LottieView
                    style={{ width: 44, height: 44 }}
                    speed={1}
                    source={require('../../assets/home.json')}
                    loop
                    autoPlay
                />
                <HeaderTitle>{titulo}</HeaderTitle>
                {total > 0 && (
                    <HeaderStatText>{done}/{total}</HeaderStatText>
                )}
            </HeaderTitleArea>

            <ProgressBarContainer>
                <ProgressBarFill style={{ width: `${Math.round(progress * 100)}%` }} />
            </ProgressBarContainer>
        </HeaderArea>
    );
}

import React from 'react';
import LottieView from  "lottie-react-native";
import View from 'react-native'
import {
    HeaderArea, 
    HeaderImage, 
    HeaderTitleArea, 
    HeaderTitle 
} from './style'

export default ({titulo}) => {

    return (
        <HeaderArea>
        
            <LottieView
                style={{                
                    width: '25%',
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}
                speed={1} 
                source={require("../../assets/home.json")}
                loop
                autoPlay
            />
            
            <HeaderTitleArea>
                <HeaderTitle>{titulo}</HeaderTitle>
            </HeaderTitleArea>
        </HeaderArea>
    );
}
